from fastapi import APIRouter, HTTPException

router = APIRouter()

# Dummy dentist credentials (replace with DB later)
DENTISTS = {
    "admin@dentai.com": "123456",
    "dentist@gmail.com": "password"
}

@router.post("/dentists/login")
def dentist_login(data: dict):
    email = data.get("email")
    password = data.get("password")

    if email in DENTISTS and DENTISTS[email] == password:
        return {
            "success": True,
            "message": "Login successful",
            "token": "demo-jwt-token"
        }

    raise HTTPException(status_code=401, detail="Invalid email or password")