from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, DateTime, JSON, ForeignKey, func
from src.providers.db import Base

class Chat(Base):
    __tablename__ = 'chats'
    chat_id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=True)
    meta = Column(JSON, nullable=True)
    # timestamp fields
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    updated_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now(), onupdate=func.now())
    deleted_at = Column(DateTime(timezone=True), nullable=True)
    # relationship fields
    messages = relationship("Message", back_populates="chat", cascade="all, delete-orphan")