from fastapi import APIRouter
from .message import message
from .chat import chat

api_router = APIRouter()

# Chat
api_router.include_router(chat.router, prefix="/chat", tags=["Chat"])

# Message
api_router.include_router(message.router, prefix="/message", tags=["Message"])
