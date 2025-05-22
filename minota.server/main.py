from fastapi import FastAPI
from conv_handler import progress_conversation
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# import asyncio

app = FastAPI()

# Allow frontend to call API (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to Minota API!"}

class Query(BaseModel):
    question: str

@app.post("/ask")
async def ask_question(payload: Query):
    answer = await progress_conversation(payload.question)
    return {"answer": answer}