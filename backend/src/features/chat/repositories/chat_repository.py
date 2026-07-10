from sqlalchemy.orm import Session

from .chat_model import Chat


class ChatRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, title: str | None = None) -> Chat:
        chat = Chat(title=title)
        self.db.add(chat)
        self.db.commit()
        self.db.refresh(chat)
        return chat

    def get(self, chat_id: int) -> Chat | None:
        return self.db.get(Chat, chat_id)
