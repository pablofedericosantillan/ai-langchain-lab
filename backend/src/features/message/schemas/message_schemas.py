from datetime import datetime

from pydantic import BaseModel, ConfigDict

from src.shared.enums.shared_enums import MessageRoleEnum


class MessageCreate(BaseModel):
    chat_id: int
    role: MessageRoleEnum
    content: str
    model: str | None = None
    input_tokens: int | None = None
    output_tokens: int | None = None


class MessageBase(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    chat_id: int
    role: MessageRoleEnum
    content: str
    model: str | None = None
    input_tokens: int | None = None
    output_tokens: int | None = None
    created_at: datetime
