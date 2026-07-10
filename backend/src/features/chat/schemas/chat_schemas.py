from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ChatCreate(BaseModel):
    title: str | None = None


class ChatBase(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    chat_id: int
    title: str | None = None
    created_at: datetime
