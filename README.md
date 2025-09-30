📜 OCR-Driven Document Extraction and Data Verification System (MOSIP Project)

📌 IMPORTANT: Repository Branch Access
This project's complete and functional source code resides on the main branch, not the default branch (master/dev).

Please execute the following command after cloning to ensure you access the correct files for installation:
git checkout main

Project Overview
This solution addresses the tedious and error-prone process of manually extracting data from scanned documents. It leverages state-of-the-art Optical Character Recognition (OCR) using Microsoft's TrOCR, alongside a robust RESTful API (FastAPI) and fuzzy matching techniques, to automatically fill digital forms and provide a high-confidence verification layer.
🎯 Key Architectural Features
| **Feature**          | **Technology / Method**                                                      | **Compliance** |
| -------------------- | ---------------------------------------------------------------------------- | -------------- |
| API 1: Extraction    | FastAPI + TrOCR Base Model                                                   | ✅ Mandatory    |
| API 2: Verification  | FastAPI + Fuzzy Matching (*thefuzz*)                                         | ✅ Mandatory    |
| Handwriting Support  | TrOCR Base Handwritten Model                                                 | ✅ Good-to-Have |
| Multi-Format Support | PyMuPDF (PDF) & python-docx (DOCX)                                           | ✅ Bonus        |
| Verification Logic   | Calculates confidence scores using fuzzy string comparison (Token Set Ratio) | ✅ Mandatory    |
| Architecture         | GPU-accelerated (via Colab/Ngrok) for efficiency; Python/RESTful APIs        | ✅ Compliant    |


1. Local Installation and Setup Guide
This project is structured with a Python backend (FastAPI) and a standard HTML/JS frontend.
A. Prerequisites
Python 3.10+ (Recommended to use Python 3.12).
venv (Virtual Environment).
Ngrok Account (Required for the GPU-accelerated Colab setup).
B. Backend Setup (API)
Clone the Repository and Navigate:
git clone [https://github.com/Krishna18113/mosip_ocr.git](https://github.com/Krishna18113/mosip_ocr.git)
cd mosip_ocr/backend


Create and Activate Virtual Environment:
python -m venv venv
.\venv\Scripts\activate  # Windows
# source venv/bin/activate # macOS/Linux


Install Dependencies:
(venv) pip install -r requirements.txt 


C. Run the Backend (GPU Acceleration via Ngrok)
Since OCR is CPU-intensive, we use Colab's GPU for the backend.
Launch the Colab Notebook (upload your main.py, ocr_service.py, and model files).
Set Ngrok Token: In the Colab code cell where Ngrok is initialized, replace the placeholder with your token: NGROK_AUTH_TOKEN = "YOUR_TOKEN".
Run the Uvicorn/Ngrok Cell in Colab.
CRITICAL: Copy the resulting HTTPS Public Ngrok URL (e.g., https://example.ngrok-free.app).
D. Frontend Setup and Linkage
Update Configuration: On your local machine, open frontend/config.js and set the BACKEND_URL to the exact HTTPS link copied from Ngrok.
// frontend/config.js
const BACKEND_URL = '[https://unmakable-sommer-unpersuasive.ngrok-free.dev](https://unmakable-sommer-unpersuasive.ngrok-free.dev)'; 


Launch the Local Frontend Server:
# Open NEW console window in the frontend/ directory
python -m http.server 5500

Open your browser to http://localhost:5500/index.html.
2. API Endpoints and Verification Logic
API 1: Extraction and Auto-Fill
Endpoint: /extract
Method: POST
FastAPI Function: extraction_api
Functionality: Takes file and doc_type (printed/handwritten), runs optimized TrOCR (with OpenCV preprocessing), extracts fields using regex, and returns structured JSON.
API 2: Data Verification (Fuzzy Matching)
Endpoint: /verify
Method: POST
FastAPI Function: data_verification_api
Logic:
Re-runs OCR on the uploaded document to get extracted_data.
Uses the verify_data function (which leverages thefuzz) to perform fuzzy comparison between the submitted_data (from the form) and the extracted_data.
Confidence Score: Calculated using fuzz.token_set_ratio() and normalized from 0.0 to 1.0.
Frontend Feedback: The JavaScript uses the score/status to provide visual (color-coded) feedback.
3. Demonstration Guide
Extraction: Select a sample image (e.g., the handwritten form), choose "Handwritten" in the dropdown, and click "Extract Text & Fields". Wait for the data to populate.
Verification (Match): Click "Verify Data" without changing the auto-filled fields. All fields should show MATCH (100%).
Verification (Mismatch): Change the "Submitted Name" to contain a small typo (e.g., "John Smath"). Click "Verify Data". The Name field should now show MISMATCH but with a high confidence score (e.g., 90%).
