from src.features.chat.repositories import Chat, ChatRepository


class ChatService:
    def __init__(self, chat_repository: ChatRepository):
        self.chat_repository = chat_repository

    def create_chat(self, title: str | None = None) -> Chat:
        return self.chat_repository.create(title=title)

    def get_chat(self, chat_id: int) -> Chat | None:
        return self.chat_repository.get(chat_id)
