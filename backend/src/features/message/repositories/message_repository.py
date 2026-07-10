from sqlalchemy.orm import Session

from src.shared.enums.shared_enums import MessageRoleEnum

from .message_model import Message


class MessageRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(
        self,
        chat_id: int,
        role: MessageRoleEnum,
        content: str,
        model: str | None = None,
        input_tokens: int | None = None,
        output_tokens: int | None = None,
    ) -> Message:
        message = Message(
            chat_id=chat_id,
            role=role,
            content=content,
            model=model,
            input_tokens=input_tokens,
            output_tokens=output_tokens,
        )
        self.db.add(message)
        self.db.commit()
        self.db.refresh(message)
        return message

    def get(self, message_id: str) -> Message | None:
        return self.db.get(Message, message_id)

    def list_by_chat(self, chat_id: int) -> list[Message]:
        return (
            self.db.query(Message)
            .filter(Message.chat_id == chat_id)
            .order_by(Message.created_at)
            .all()
        )
