from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import predict, patients, dentists

# ✅ Create FastAPI app FIRST
app = FastAPI(
    title="DentAIre Backend",
    description="AI Dental Scan Backend API",
    version="1.0.0"
)

# ✅ Add CORS middleware AFTER creating app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Register routes
app.include_router(predict.router, prefix="/api", tags=["Prediction"])
app.include_router(patients.router, prefix="/api", tags=["Patients"])
app.include_router(dentists.router, prefix="/api", tags=["Dentists"])

# ✅ Root endpoint
@app.get("/")
def root():
    return {"message": "DentAIre Backend Running 🚀"}