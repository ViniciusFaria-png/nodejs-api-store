# 🚀 Backend Project with Node.js, Express, and MongoDB

## 📌 Description

This is a backend project structured in the **MVC (Model-View-Controller)** pattern, using **Node.js**, **Express**, and **MongoDB**. The API allows managing brands and products, including functionalities for creation, reading, updating, and deletion (**CRUD**).

## 📁 Project Structure

```
/src
  ├── config/
  │    ├── dbConnect.js      # MongoDB database configuration
  │
  ├── controllers/
  │    ├── marcaController.js      # Brand logic
  │    ├── produtoController.js    # Product logic
  │
  ├── models/
  │    ├── Marca.js     # Brand model
  │    ├── Produto.js   # Product model
  │
  ├── routes/
  │    ├── index.js            # Main routes
  │    ├── marcaRoutes.js      # Brand routes
  │    ├── produtosRoutes.js   # Product routes
  │
  ├── app.js       # Express configuration
  ├── server.js    # Server initialization

.gitignore
.env            # Environment variables
package.json    # Dependencies and scripts
README.md       # Project documentation
```

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express** - Framework for API creation
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for interacting with MongoDB

## ⚡ How to Run the Project

### 1️⃣ Clone the repository

```sh
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Configure environment variables

Create a **.env** file and add:

```
MONGODB_URI=<MONGO_URL>
PORT=3000
```

### 4️⃣ Run the server

```sh
npm start
```

## 📡 Testing the API

You can test the endpoints using **Postman** or **Insomnia**.

### 🔹 Available routes:

| Method | Route       | Description              |
| ------ | ----------- | ------------------------ |
| GET    | /marcas     | List all brands          |
| GET    | /marcas/:id | List a specific brand    |
| POST   | /marcas     | Register a new brand     |
| PUT    | /marcas/:id | Update an existing brand |
| DELETE | /marcas/:id | Remove a brand           |

| Method | Route         | Description                |
| ------ | ------------- | -------------------------- |
| GET    | /produtos     | List all products          |
| GET    | /produtos/:id | List a specific product    |
| POST   | /produtos     | Register a new product     |
| PUT    | /produtos/:id | Update an existing product |
| DELETE | /produtos/:id | Remove a product           |
