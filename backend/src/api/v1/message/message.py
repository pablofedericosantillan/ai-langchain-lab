from fastapi import APIRouter, Depends, HTTPException, status

from src.features.chat.dependencies import get_chat_service
from src.features.chat.services import ChatService
from src.features.message.dependencies import get_message_service
from src.features.message.schemas import MessageBase, MessageCreate
from src.features.message.services import MessageService

router = APIRouter()


@router.post("/", response_model=MessageBase, status_code=status.HTTP_201_CREATED)
def create_message(
    message_data: MessageCreate,
    chat_service: ChatService = Depends(get_chat_service),
    message_service: MessageService = Depends(get_message_service),
):
    if not chat_service.get_chat(message_data.chat_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Chat not found")

    return message_service.create_message(
        chat_id=message_data.chat_id,
        role=message_data.role,
        content=message_data.content,
        model=message_data.model,
        input_tokens=message_data.input_tokens,
        output_tokens=message_data.output_tokens,
    )


@router.get("/{message_id}", response_model=MessageBase)
def get_message(
    message_id: str,
    message_service: MessageService = Depends(get_message_service),
):
    message = message_service.get_message(message_id)
    if not message:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found")
    return message
