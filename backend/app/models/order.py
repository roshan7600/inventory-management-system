from sqlalchemy import Column, Integer, Float, ForeignKey
from app.database import Base

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=False
    )
    total_amount = Column(
        Float,
        nullable=False,
        default=0
    )