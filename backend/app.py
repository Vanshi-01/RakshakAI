from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("models/gemini-3.5-flash")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SMSRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {"message": "RakshakAI Backend Running 🚀"}


@app.post("/analyze-sms")
def analyze_sms(data: SMSRequest):

    prompt = f"""
You are a cybersecurity expert.

Analyze the following SMS and classify it.

SMS:
{data.message}

Respond in this format:

Risk: LOW / MEDIUM / HIGH

Reason:
- Point 1
- Point 2
- Point 3

Recommendation:
- Recommendation
"""

    response = model.generate_content(prompt)

    return {
        "result": response.text
    }