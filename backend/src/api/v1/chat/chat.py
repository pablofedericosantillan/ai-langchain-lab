from fastapi import APIRouter, Depends, HTTPException, status

from src.features.chat.dependencies import get_chat_service
from src.features.chat.schemas import ChatBase, ChatCreate
from src.features.chat.services import ChatService
from src.features.message.dependencies import get_message_service
from src.features.message.schemas import MessageBase
from src.features.message.services import MessageService

router = APIRouter()


@router.get("/", response_model=list[ChatBase])
def list_chats(
    chat_service: ChatService = Depends(get_chat_service),
):
    return chat_service.list_chats()


@router.post("/", response_model=ChatBase, status_code=status.HTTP_201_CREATED)
def create_chat(
    chat_data: ChatCreate,
    chat_service: ChatService = Depends(get_chat_service),
):
    return chat_service.create_chat(title=chat_data.title)


@router.get("/{chat_id}", response_model=ChatBase)
def get_chat(
    chat_id: int,
    chat_service: ChatService = Depends(get_chat_service),
):
    chat = chat_service.get_chat(chat_id)
    if not chat:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Chat not found")
    return chat


@router.get("/{chat_id}/messages", response_model=list[MessageBase])
def list_messages_in_chat(
    chat_id: int,
    chat_service: ChatService = Depends(get_chat_service),
    message_service: MessageService = Depends(get_message_service),
):
    if not chat_service.get_chat(chat_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Chat not found")
    return message_service.list_messages(chat_id)
