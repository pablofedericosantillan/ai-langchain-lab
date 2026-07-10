import uuid
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Text, Enum, DateTime, ForeignKey, func
from src.providers.db import Base
from src.shared.enums.shared_enums import MessageRoleEnum

class Message(Base):
    __tablename__ = 'messages'
    id = Column(String(36), primary_key=True, unique=True, nullable=False, default=lambda: str(uuid.uuid4()))
    chat_id = Column(Integer, ForeignKey('chats.chat_id'), nullable=False)
    role = Column(Enum(MessageRoleEnum), nullable=False)
    content = Column(Text, nullable=False)
    model = Column(String, nullable=True)
    input_tokens = Column(Integer, nullable=True)
    output_tokens = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    # relationship fields
    chat = relationship("Chat", back_populates="messages")
