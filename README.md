

#  E-Commerce REST API — Full CRUD (Node.js + Express + MongoDB)

A complete **RESTful E-commerce API** built using **Node.js, Express.js, MongoDB, and JWT authentication**.
This API supports **user authentication, product management, and order creation** following the **REST principles**.

---

##  Features

###  **Authentication**

* User Registration
* User Login (JWT token)
* Protected Routes
* Password Hashing (bcrypt)

###  **Products CRUD**

* Create product
* Read products (all + by ID)
* Update product
* Delete product

###  **Orders CRUD**

* Create order
* View orders
* Delete orders
* Linked with Auth User

---

#  Concepts Used (Explained Clearly)

## 1️ **What is REST API?**

REST = Representational State Transfer.
REST API uses **HTTP methods** to manage resources.

| HTTP Method | Meaning     | Example              |
| ----------- | ----------- | -------------------- |
| GET         | Get data    | Get all products     |
| POST        | Create data | Add a new product    |
| PUT         | Update data | Edit product details |
| DELETE      | Delete data | Remove product       |

✔ Uses **JSON for data exchange**
✔ Resources are accessed via **clear endpoints**
✔ Stateless → server does not store client session

---

## 2️ **What is CRUD?**

CRUD = **Create, Read, Update, Delete**

This API performs CRUD on:

* Users
* Products
* Orders

---

## 3️ **What is JWT?**

JWT = JSON Web Token
Used for **authentication**.

✔ After login → server gives token
✔ Client sends token in headers → `Authorization: Bearer <token>`
✔ Protects sensitive routes

---

## 4️⃣ **What is MongoDB?**

MongoDB is a **NoSQL document database** that stores data in JSON format.

✔ Flexible schema
✔ Scales easily
✔ Perfect for E-commerce data (products, orders)

---

## 5️⃣ **What is Mongoose?**

Mongoose = MongoDB ORM
Helps to define **schema, models, and database queries**.

---

## 6️⃣ **Why Use Project Structure?**

To keep code clean & professional.

```
ecommerce-api/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── db.js
 ├── server.js
 ├── .env
 └── package.json
```

✔ Controller → business logic
✔ Route → URL mapping
✔ Model → database structure
✔ Server → main entry

---

# 🏗️ Project Setup

## 1️⃣ Install dependencies

```
npm install
```

## 2️⃣ Setup environment variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your-mongo-connection-string
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
```

## 3️⃣ Start the server

```
npm run dev
```

or

```
node server.js
```

You should see:

```
Server started on port 3000
MongoDB connected
```

---

# 🔥 API Endpoints

## 👤 **Auth Routes**

### ✔ Register

**POST** `/api/auth/register`

Body:

```json
{
  "name": "Sowmiya",
  "email": "test@gmail.com",
  "password": "123456"
}
```

### ✔ Login

**POST** `/api/auth/login`

Response:

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "name": "...",
    "email": "..."
  }
}
```

---

## 🛒 **Product Routes (Protected)**

### ✔ Create Product

**POST** `/api/products`

Header:

```
Authorization: Bearer <token>
```

Body:

```json
{
  "name": "iPhone",
  "description": "Latest model",
  "price": 75000
}
```

---

### ✔ Get All Products

**GET** `/api/products`

---

### ✔ Get Product by ID

**GET** `/api/products/:id`

---

### ✔ Update Product

**PUT** `/api/products/:id`

Body:

```json
{
  "price": 80000
}
```

---

### ✔ Delete Product

**DELETE** `/api/products/:id`

---

## 📦 Order Routes (Protected)

### ✔ Create Order

**POST** `/api/orders`

Body:

```json
{
  "products": ["productId1", "productId2"]
}
```

---

# 🧪 How To Test API (using Postman)

### Step 1 — Register a user

→ Get success message

### Step 2 — Login

→ Copy `token`

### Step 3 — Go to `Headers`

Add:

```
Authorization: Bearer <token>
```

### Step 4 — Test Create Product

Body → JSON
Post request


#  Status Codes Used

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |
| 500  | Server Error |

