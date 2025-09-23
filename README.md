# 🐾 BarkID - AI Dog Breed Identifier

<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/2527/2527324.png" alt="BarkID Logo" width="150px">

[![Python](https://img.shields.io/badge/Python-3.8+-4a6fa5?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-ff8b5e?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-54d1bd?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-7988a3?style=for-the-badge)](LICENSE)

</div>

<p align="center">
  <img src="https://user-images.githubusercontent.com/2646532/149553569-27833502-3c2d-452f-9171-4638c4b14d24.gif" alt="Project Demo GIF" width="600px" />
</p>

<p align="center">
  <i>Note: This is a placeholder GIF. You can create your own to show your project in action!</i>
</p>

## 📋 Overview

BarkID is an intelligent web application that identifies dog breeds from uploaded images using advanced machine learning. Powered by a **dual-model AI architecture**, it first confirms if the image contains a dog before identifying its specific breed from over 120 possibilities.

Developed by [Janith Deshan](https://github.com/janiyax35), this project combines the power of TensorFlow's **ResNet50V2** architecture with an intuitive, responsive web interface for a seamless user experience.

---

## ✨ Key Features

<div align="center">

| 🎯 Feature | 📝 Description |
|------------|---------------|
| **120+ Dog Breeds** | Recognizes over 120 different dog breeds with high accuracy |
| **Smart Gatekeeper** | Pre-screening model confirms if the image contains a dog |
| **Hard Negative Training** | Trained to distinguish dogs from similar animals (cats, foxes) |
| **Responsive Design** | Fully responsive UI that works on any device |
| **Drag & Drop Upload** | Easy image upload with drag-and-drop functionality |
| **Real-time Analysis** | Visual feedback during image processing |

</div>

---

## 🏛️ System Architecture

<p align="center">
  <img src="https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBBW1VwbG9hZGVkIEltYWdlXSAtLT4gQihJbWFnZSBQcm9jZXNzaW5nKVxuICAgIEIgLS0-IENbR2F0ZWtlZXBlciBNb2RlbF1cbiAgICBDIC0tPiB8SXMgRG9nfCBEW0JyZWVkIENsYXNzaWZpZXJdXG4gICAgQyAtLT4gfE5vdCBEb2d8IEVbUmVqZWN0XVxuICAgIEQgLS0-IEZbQnJlZWQgSWRlbnRpZmllZl0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCIsInRoZW1lVmFyaWFibGVzIjp7ImJhY2tncm91bmQiOiJ3aGl0ZSIsInByaW1hcnlDb2xvciI6IiM0YTZmYTUiLCJzZWNvbmRhcnlDb2xvciI6IiNmZjhiNWUiLCJ0ZXJ0aWFyeUNvbG9yIjoiIzU0ZDFiZCIsInByaW1hcnlCb3JkZXJDb2xvciI6IiNjNGM0YzQiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6IiNjNGM0YzQiLCJ0ZXJ0aWFyeUJvcmRlckNvbG9yIjoiI2M0YzRjNCIsInByaW1hcnlUZXh0Q29sb3IiOiIjMTEzMjQzIiwic2Vjb25kYXJ5VGV4dENvbG9yIjoiIzMzMzMzMyIsInRlcnRpYXJ5VGV4dENvbG9yIjoiIzMzMzMzMyIsImxpbmVDb2xvciI6IiMzMzMzMzMiLCJ0ZXh0Q29sb3IiOiIjMzMzIiwibWFpbkJrZyI6IiNmZmZmZmYiLCJzZWNvbmRCa2ciOiIjZmZmZmZmIiwiYm9yZGVyMSI6IiM5MzcwREIiLCJib3JkZXIyIjoiI2FhYWFhYSIsImFycm93aGVhZENvbG9yIjoiIzMzMzMzMyIsImZvbnRGYW1pbHkiOiJcInRyZWJ1Y2hldCBtc1wiLCB2ZXJkYW5hLCBhcmlhbCIsImZvbnRTaXplIjoiMTZweCIsImxhYmVsQmFja2dyb3VuZCI6IiNlOGU4ZTgiLCJub2RlQmtnIjoiI0VDRUNGRiIsIm5vZGVCb3JkZXIiOiIjOTM3MERCIiwiY2x1c3RlckJrZyI6IiNmZmZmZGUiLCJjbHVzdGVyQm9yZGVyIjoiI2FhYWEzMyIsImRlZmF1bHRMaW5rQ29sb3IiOiIjMzMzMzMzIiwidGl0bGVDb2xvciI6IiMzMzMiLCJlZGdlTGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsImFjdG9yQm9yZGVyIjoiaHNsKDI1OS42MjYxNjgyMjQzLCA1OS43NzY1MzYzMTI4JSwgODcuOTAxOTYwNzg0MyUpIiwiYWN0b3JCa2ciOiIjRUNFQ0ZGIiwiYWN0b3JUZXh0Q29sb3IiOiJibGFjayIsImFjdG9yTGluZUNvbG9yIjoiZ3JleSIsInNpZ25hbENvbG9yIjoiIzMzMyIsInNpZ25hbFRleHRDb2xvciI6IiMzMzMiLCJsYWJlbEJveEJrZ0NvbG9yIjoiI0VDRUNGRiIsImxhYmVsQm94Qm9yZGVyQ29sb3IiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJsYWJlbFRleHRDb2xvciI6ImJsYWNrIiwibG9vcFRleHRDb2xvciI6ImJsYWNrIiwibm90ZUJvcmRlckNvbG9yIjoiI2FhYWEzMyIsIm5vdGVCa2dDb2xvciI6IiNmZmY1YWQiLCJub3RlVGV4dENvbG9yIjoiYmxhY2siLCJhY3RpdmF0aW9uQm9yZGVyQ29sb3IiOiIjNjY2IiwiYWN0aXZhdGlvbkJrZ0NvbG9yIjoiI2Y0ZjRmNCIsInNlcXVlbmNlTnVtYmVyQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvciI6InJnYmEoMTAyLCAxMDIsIDI1NSwgMC40OSkiLCJhbHRTZWN0aW9uQmtnQ29sb3IiOiJ3aGl0ZSIsInNlY3Rpb25Ca2dDb2xvcjIiOiIjZmZmNDAwIiwidGFza0JvcmRlckNvbG9yIjoiIzUzNGZiYyIsInRhc2tCa2dDb2xvciI6IiM4YTkwZGQiLCJ0YXNrVGV4dExpZ2h0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0Q29sb3IiOiJ3aGl0ZSIsInRhc2tUZXh0RGFya0NvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dE91dHNpZGVDb2xvciI6ImJsYWNrIiwidGFza1RleHRDbGlja2FibGVDb2xvciI6IiMwMDMxNjMiLCJhY3RpdmVUYXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwiYWN0aXZlVGFza0JrZ0NvbG9yIjoiI2JmYzdmZiIsImdyaWRDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQmtnQ29sb3IiOiJsaWdodGdyZXkiLCJkb25lVGFza0JvcmRlckNvbG9yIjoiZ3JleSIsImNyaXRCb3JkZXJDb2xvciI6IiNmZjg4ODgiLCJjcml0QmtnQ29sb3IiOiJyZWQiLCJ0b2RheUxpbmVDb2xvciI6InJlZCIsImxhYmVsQ29sb3IiOiJibGFjayIsImVycm9yQmtnQ29sb3IiOiIjNTUyMjIyIiwiZXJyb3JUZXh0Q29sb3IiOiIjNTUyMjIyIiwiY2xhc3NUZXh0IjoiIzEzMTMwMCIsImZpbGxUeXBlMCI6IiNFQ0VDRkYiLCJmaWxsVHlwZTEiOiIjZmZmZmRlIiwiZmlsbFR5cGUyIjoiaHNsKDMwNCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGUzIjoiaHNsKDEyNCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIiwiZmlsbFR5cGU0IjoiaHNsKDE3NiwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU1IjoiaHNsKC00LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTYiOiJoc2woOCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwiZmlsbFR5cGU3IjoiaHNsKDE4OCwgMTAwJSwgOTMuNTI5NDExNzY0NyUpIn19fQ==" alt="System Architecture Diagram" width="600px" />
</p>

The application uses a sophisticated two-model pipeline for accuracy and robustness:

### 1. Gatekeeper Model (Dog vs. Not-Dog)
- When an image is uploaded, it is first sent to this **binary classifier**.
- Its only job is to answer: "Is this a dog?" with high confidence.
- Trained on a balanced dataset of dogs, obvious non-dogs (flowers, cars), and "**hard negatives**" (cats, foxes).

### 2. Breed Classifier Model (The Expert)
- **Only if** the Gatekeeper model confirms the image is a dog, the image is passed to this classifier.
- This model identifies the specific breed from **120 possibilities**.
- Built with **ResNet50V2** architecture pre-trained on **ImageNet** for high accuracy.

This approach prevents nonsensical predictions (like classifying a car as a "Beagle") and provides a more intelligent user experience.

---

## 🛠️ Technologies Used

<div align="center">

| 🔧 Backend | 🧠 AI/ML | 🎨 Frontend |
|------------|---------|------------|
| ![Python](https://img.shields.io/badge/-Python-4a6fa5?style=flat-square&logo=python&logoColor=white) | ![TensorFlow](https://img.shields.io/badge/-TensorFlow-ff8b5e?style=flat-square&logo=tensorflow&logoColor=white) | ![HTML5](https://img.shields.io/badge/-HTML5-54d1bd?style=flat-square&logo=html5&logoColor=white) |
| ![Flask](https://img.shields.io/badge/-Flask-4a6fa5?style=flat-square&logo=flask&logoColor=white) | ![Keras](https://img.shields.io/badge/-Keras-ff8b5e?style=flat-square&logo=keras&logoColor=white) | ![CSS3](https://img.shields.io/badge/-CSS3-54d1bd?style=flat-square&logo=css3&logoColor=white) |
| ![NumPy](https://img.shields.io/badge/-NumPy-4a6fa5?style=flat-square&logo=numpy&logoColor=white) | ![Pillow](https://img.shields.io/badge/-Pillow-ff8b5e?style=flat-square&logo=python&logoColor=white) | ![Bootstrap](https://img.shields.io/badge/-Bootstrap-54d1bd?style=flat-square&logo=bootstrap&logoColor=white) |
| | | ![AOS](https://img.shields.io/badge/-AOS_Animations-54d1bd?style=flat-square&logo=javascript&logoColor=white) |

</div>

---

## 📂 Project Structure

```bash
dog_breed_webapp/
├── static/
│   ├── style.css             # CSS for styling the webpage
│   └── js/
│       └── animations.js     # JavaScript for animations and interactions
├── templates/
│   └── index.html            # HTML template for the user interface
├── uploads/
│   └── (user images)         # Folder for temporarily storing uploaded images
├── app.py                    # Main Flask application script
├── dog_breed_model_weights.weights.h5 # Model 1: The breed identifier weights
├── gatekeeper_v2_weights.weights.h5   # Model 2: The smart gatekeeper weights
├── class_names.txt           # List of the 120 dog breed names
├── requirements.txt          # Python package dependencies
└── README.md                 # This file
```

## 🚀 Setup and Local Installation

<details>
<summary><b>Click to expand installation instructions</b></summary>

### 1. Prerequisites
- Python 3.8+
- `pip` package manager

### 2. Clone the Repository
```bash
git clone https://github.com/janiyax35/dog-breed-identifier.git
cd dog-breed-identifier
```
## Model Files

This project uses two model files (~100MB each) hosted on Hugging Face:
- `dog_breed_model_weights.weights.h5`: The breed classifier model
- `gatekeeper_v2_weights.weights.h5`: The gatekeeper model

```bash
https://huggingface.co/JanithDeshan/dog-breed-identifier/tree/main
```

### 3. Create a Virtual Environment (Recommended)
```bash
# For Windows
python -m venv venv
venv\Scripts\activate

# For macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
```
> **Note**: The model weights files (`.h5`) are too large for a typical Git repository. You should upload them to a service like Google Drive or GitHub Releases and include a link here for others to download them.

### 5. Run the Application
```bash
python app.py
```

You should see output indicating the server is running, including a local URL:
```bash
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

### 6. Open in Browser
Open your web browser and navigate to http://127.0.0.1:5000. You should now be able to use the application!


## 🧠 Model Training

<div align="center">

| Model | Dataset | Architecture | Training Approach |
|-------|---------|--------------|------------------|
| **Breed Classifier** | stanford_dogs | ResNet50V2 | Transfer Learning + Fine Tuning |
| **Gatekeeper (V2)** | Custom Balanced Dataset | ResNet50V2 | Binary Classification |

</div>

The models were trained in Google Colab notebooks using TensorFlow and TensorFlow Datasets. The process involved transfer learning, data augmentation, and fine-tuning on specific datasets.

- **Breed Classifier**: Trained on the stanford_dogs dataset with 120 breed classes.
- **Gatekeeper (V2)**: Trained on a custom-balanced dataset comprising:
  - **Positive Class**: Images from stanford_dogs.
  - **Negative Class**: A mix of "easy" negatives (tf_flowers) and "hard" negatives (cats_vs_dogs).

## 🚀 Click to expand see screen shots
<details>
<div align="center">
  <img src="https://github.com/janiyax35/Dog-Breed-Identifier-/blob/fc2abbb5ebcce37ca74cf22a8c4d436b24332482/assets/01.png" alt="Application Screenshot" width="700"/>
  <img src="https://github.com/janiyax35/Dog-Breed-Identifier-/blob/fc2abbb5ebcce37ca74cf22a8c4d436b24332482/assets/02.png" alt="Application Screenshot" width="700"/>
  <img src="https://github.com/janiyax35/Dog-Breed-Identifier-/blob/fc2abbb5ebcce37ca74cf22a8c4d436b24332482/assets/03.png" alt="Application Screenshot" width="700"/>
  <img src="https://github.com/janiyax35/Dog-Breed-Identifier-/blob/fc2abbb5ebcce37ca74cf22a8c4d436b24332482/assets/04.png" alt="Application Screenshot" width="700"/>
  <img src="https://github.com/janiyax35/Dog-Breed-Identifier-/blob/fc2abbb5ebcce37ca74cf22a8c4d436b24332482/assets/05.png" alt="Application Screenshot" width="700"/>
</div>
</details>

## 🔮 Future Improvements

<div align="center">
  
| Feature | Description | Priority |
|---------|-------------|----------|
| 🌐 **Cloud Deployment** | Deploy to AWS, GCP, or Azure | High |
| 📱 **Mobile App** | Create a mobile app version | Medium |
| 🔍 **Multiple Breeds** | Detect multiple dogs in one image | Medium |
| 📊 **Top-3 Predictions** | Show top three most likely breeds | High |
| 🐕 **Breed Information** | Add detailed breed characteristics | Low |
| 🐳 **Docker Support** | Containerize for easy deployment | Medium |

</div>


## 👨‍💻 About the Developer

<div align="center">
  <img src="https://github.com/janiyax35/Dog-Breed-Identifier-/blob/ec58f4170bdaf45bce1929a237a6c1a01cfc6887/assets/Profile.jpeg" style="border-radius:50%;" alt="Developer Avatar" width="100"/>
  <h3>Janith Deshan</h3>
  <p>AI & Machine Learning Developer</p>
  
  [![Email](https://img.shields.io/badge/Email-janithmihijaya123%40gmail.com-ff8b5e?style=flat-square&logo=gmail&logoColor=white)](mailto:janithmihijaya123@gmail.com)
  [![Facebook](https://img.shields.io/badge/Facebook-janith.deshan.186-4a6fa5?style=flat-square&logo=facebook&logoColor=white)](https://www.facebook.com/janith.deshan.186)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-janithdeshan-4a6fa5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/janithdeshan/)
  [![GitHub](https://img.shields.io/badge/GitHub-janiyax35-54d1bd?style=flat-square&logo=github&logoColor=white)](https://github.com/janiyax35)
  [![Instagram](https://img.shields.io/badge/Instagram-janith__deshan11-ff8b5e?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/janith_deshan11/)
</div>

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the creators of the Stanford Dogs Dataset.
- Thanks to the TensorFlow Datasets team for providing easy access to public datasets.
- Special thanks to all contributors and testers of this project.

<div align="center">
  <br>
  <img src="https://cdn-icons-png.flaticon.com/512/2527/2527324.png" width="50px" alt="Paw Icon" />
  <p>Made with ❤️ by <a href="https://github.com/janiyax35">Janith Deshan</a></p>
  <p>Last updated: 2025-08-20</p>
</div>
















