from pydantic import BaseModel

class CommonCreateResponse(BaseModel):
    id: str

class CommonSuccessfulResponse(BaseModel):
    message: str   