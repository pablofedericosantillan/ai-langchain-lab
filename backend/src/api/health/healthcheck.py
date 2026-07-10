from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def healthcheck():
    return {"message": "API Backend is running", "docs": "/docs", "redoc": "/redoc"}
