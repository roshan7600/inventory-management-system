from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base

from app.models import (
    Product,
    Customer,
    Order,
    OrderItem
)

from app.routes.product import router as product_router
from app.routes.customer import router as customer_router
from app.routes.order import router as order_router
from app.routes.dashboard import router as dashboard_router


# Create FastAPI application
app = FastAPI(
    title="Inventory Management System"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Register routers
app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)
app.include_router(dashboard_router)


# Home Route
@app.get("/")
def home():
    return {
        "message": "API Working Successfully"
    }