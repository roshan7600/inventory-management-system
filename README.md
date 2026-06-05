# Inventory Management System

A full-stack Inventory & Order Management System designed to help businesses efficiently manage products, customers, orders, and inventory levels.

Built using **FastAPI**, **PostgreSQL**, **React**, and **Docker**, with deployment on **Render** and **Vercel**.

---

## Live Demo

### Frontend

https://inventory-management-system-five-ashy.vercel.app

### Backend API

https://inventory-management-system-nq4c.onrender.com

### API Documentation

https://inventory-management-system-nq4c.onrender.com/docs

---

## Features

### Product Management

* Create products
* View product inventory
* Delete products
* Track available stock

### Customer Management

* Create customers
* View customer records
* Delete customers

### Order Management

* Create orders
* View order history
* Delete orders
* Automatic order total calculation

### Inventory Tracking

* Automatic stock deduction when orders are placed
* Prevents orders when stock is insufficient
* Real-time inventory updates

### Dashboard

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

---

## Technology Stack

### Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Pydantic
* Uvicorn

### Frontend

* React
* Vite
* Axios

### DevOps & Deployment

* Docker
* Docker Compose
* GitHub
* Render
* Vercel

---

## Project Architecture

```text
inventory-management-system
│
├── backend
│   ├── app
│   │   ├── models
│   │   ├── routes
│   │   ├── schemas
│   │   └── database.py
│   │
│   ├── Dockerfile
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   └── components
│   │
│   └── package.json
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/roshan7600/inventory-management-system.git

cd inventory-management-system
```

---

## Backend Setup

### Create Virtual Environment

```bash
cd backend

python -m venv venv
```

### Activate Environment

Windows:

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=inventory_db
```

### Run Backend

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Docker Deployment

### Build Image

```bash
docker build -t inventory-backend ./backend
```

### Run Container

```bash
docker run -p 8000:8000 inventory-backend
```

---

## Docker Compose

Run the complete application stack:

```bash
docker-compose up --build
```

---

## API Endpoints

### Products

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /products/     |
| POST   | /products/     |
| DELETE | /products/{id} |

### Customers

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /customers/     |
| POST   | /customers/     |
| DELETE | /customers/{id} |

### Orders

| Method | Endpoint     |
| ------ | ------------ |
| GET    | /orders/     |
| POST   | /orders/     |
| DELETE | /orders/{id} |

### Dashboard

| Method | Endpoint    |
| ------ | ----------- |
| GET    | /dashboard/ |

---

## Deployment

### Backend (Render)

https://inventory-management-system-nq4c.onrender.com

### Frontend (Vercel)

https://inventory-management-system-five-ashy.vercel.app

---

## Future Improvements

* Product Update Functionality
* Customer Update Functionality
* Order Status Tracking
* Search & Filtering
* Pagination
* Authentication & Authorization
* Dashboard Analytics
* Email Notifications
* Low Stock Alerts


