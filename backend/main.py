from fastapi import FastAPI
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


# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI application
app = FastAPI(
    title="Inventory Management System"
)

# Include product routes
app.include_router(product_router)
# Include customer routes
app.include_router(customer_router)
# Include order routes
app.include_router(order_router)
# Include dashboard routes
app.include_router(dashboard_router)
# Home route
@app.get("/")
def home():
    return {"message": "API Working Successfully"}