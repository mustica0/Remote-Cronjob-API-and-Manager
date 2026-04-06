from fastapi import FastAPI
import uvicorn

app = FastAPI(
    title="Remote Cronjob API",
    description="Dağıtık sistemler için görev zamanlayıcı",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Remote Cronjob Manager API Çalışıyor!"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)