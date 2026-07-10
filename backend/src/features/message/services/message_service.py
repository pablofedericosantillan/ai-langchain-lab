from src.features.message.repositories import Message, MessageRepository
from src.shared.enums.shared_enums import MessageRoleEnum


class MessageService:
    def __init__(self, message_repository: MessageRepository):
        self.message_repository = message_repository

    def create_message(
        self,
        chat_id: int,
        role: MessageRoleEnum,
        content: str,
        model: str | None = None,
        input_tokens: int | None = None,
        output_tokens: int | None = None,
    ) -> Message:
        return self.message_repository.create(
            chat_id=chat_id,
            role=role,
            content=content,
            model=model,
            input_tokens=input_tokens,
            output_tokens=output_tokens,
        )

    def get_message(self, message_id: str) -> Message | None:
        return self.message_repository.get(message_id)

    def list_messages(self, chat_id: int) -> list[Message]:
        return self.message_repository.list_by_chat(chat_id)
