from fastapi import Depends
from sqlalchemy.orm import Session
from src.providers.db import get_db
from src.features.chat.repositories import ChatRepository
from src.features.chat.services import ChatService


def get_chat_service(db: Session = Depends(get_db)) -> ChatService:
    return ChatService(ChatRepository(db))
