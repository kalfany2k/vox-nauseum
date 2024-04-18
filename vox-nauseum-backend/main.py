from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
)

class PieceBase(BaseModel):
    title: str = Field(..., max_length=50)

class PieceModel(PieceBase):
    id: int

    class Config:
        from_attributes = True

def get_db(): 
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)

@app.post("/pieces/", response_model=PieceModel)
async def create_piece(piece: PieceBase, db: db_dependency):
    db_piece = models.Pieces(title=piece.title, date_posted=datetime.now().strftime("%d-%m-%Y"))
    db.add(db_piece)
    db.commit()
    db.refresh(db_piece)
    return db_piece