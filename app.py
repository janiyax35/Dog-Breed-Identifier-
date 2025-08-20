import os
import numpy as np
import tensorflow as tf
from flask import Flask, request, render_template, send_from_directory
from werkzeug.utils import secure_filename
from PIL import Image

from tensorflow.keras.applications import ResNet50V2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense, Dropout

# --- Configuration ---
app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

BREED_WEIGHTS_PATH = 'dog_breed_model_weights.weights.h5'
# --- THIS IS THE ONLY LINE THAT HAS CHANGED ---
# We are now pointing to the new, smarter gatekeeper weights file.
GATEKEEPER_WEIGHTS_PATH = 'gatekeeper_v2_weights.weights.h5' 
# ---------------------------------------------
CLASS_NAMES_PATH = 'class_names.txt'
NUM_CLASSES = 120
IMG_SIZE = 224

# --- MODEL BUILDING FUNCTIONS ---

def create_breed_model():
    """Builds and returns the dog breed identifier model (the 'Expert')."""
    base_model = ResNet50V2(input_shape=(IMG_SIZE, IMG_SIZE, 3), include_top=False, weights='imagenet')
    base_model.trainable = False
    model = Sequential([
        base_model,
        GlobalAveragePooling2D(),
        Dropout(0.5),
        Dense(NUM_CLASSES, activation='softmax')
    ])
    return model

def create_gatekeeper_model():
    """Builds and returns the dog vs. not-dog model (the 'Gatekeeper')."""
    base_model = ResNet50V2(input_shape=(IMG_SIZE, IMG_SIZE, 3), include_top=False, weights='imagenet')
    base_model.trainable = False
    model = Sequential([
        base_model,
        GlobalAveragePooling2D(),
        Dense(1, activation='sigmoid') # Binary classification
    ])
    return model

# --- LOAD MODELS AND CLASS NAMES ---

print("--- Loading all models and class names... ---")
# Load Breed (Expert) Model
breed_model = create_breed_model()
breed_model.load_weights(BREED_WEIGHTS_PATH)
print("✅ Breed Expert model loaded.")

# Load Gatekeeper Model (using the new weights path)
gatekeeper_model = create_gatekeeper_model()
gatekeeper_model.load_weights(GATEKEEPER_WEIGHTS_PATH)
print("✅ Smarter Gatekeeper (V2) model loaded.")

# Load Class Names
with open(CLASS_NAMES_PATH, 'r') as f:
    class_names = [line.strip() for line in f.readlines()]
print(f"✅ Class names loaded. Found {len(class_names)} classes.")
print("--- Setup complete ---")


# --- IMAGE PREPROCESSING ---
def preprocess_image(image_path, img_size=224):
    img = Image.open(image_path).convert('RGB')
    img = img.resize((img_size, img_size))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)
    img_array = tf.keras.applications.resnet_v2.preprocess_input(img_array)
    return img_array

# --- FLASK ROUTES ---
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            return render_template('index.html', error="No file part.")
        
        file = request.files['file']
        if file.filename == '':
            return render_template('index.html', error="No selected file.")

        if file:
            filename = secure_filename(file.filename)
            os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            # --- TWO-STEP PREDICTION LOGIC ---
            processed_image = preprocess_image(filepath)

            # Step 1: Use the smarter Gatekeeper model to check if it's a dog
            gatekeeper_pred = gatekeeper_model.predict(processed_image)[0][0]
            
            # You can adjust this threshold. A higher value (e.g., 0.7) makes it stricter.
            if gatekeeper_pred > 0.5:
                # Step 2: If it IS a dog, use the Expert model to find the breed
                breed_prediction = breed_model.predict(processed_image)
                predicted_class_index = np.argmax(breed_prediction)
                predicted_breed = class_names[predicted_class_index]
                confidence = np.max(breed_prediction) * 100

                return render_template('index.html',
                                       prediction=f"Predicted Breed: {predicted_breed}",
                                       confidence=f"Confidence: {confidence:.2f}%",
                                       uploaded_image=filename)
            else:
                # If it's NOT a dog, show a specific message
                dog_confidence = (1 - gatekeeper_pred) * 100 # Invert confidence for the message
                return render_template('index.html',
                                       prediction=f"This doesn't look like a dog.",
                                       confidence=f"({dog_confidence:.2f}% sure it's not a dog)",
                                       uploaded_image=filename)

    return render_template('index.html')


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


if __name__ == '__main__':
    app.run(debug=True)