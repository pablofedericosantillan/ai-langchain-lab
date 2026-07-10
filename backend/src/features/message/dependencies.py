from fastapi import Depends
from sqlalchemy.orm import Session
from src.providers.db import get_db
from src.features.message.repositories import MessageRepository
from src.features.message.services import MessageService


def get_message_service(db: Session = Depends(get_db)) -> MessageService:
    return MessageService(MessageRepository(db))
