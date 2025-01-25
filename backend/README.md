# Backend API Documentation

## Overview

This document provides an overview of the API routes available in the backend of the InspireShop project. The backend is built using Node.js, Express.js, and MongoDB. The API routes are organized into different modules, each responsible for a specific functionality.

## Table of Contents

- [User Routes](#user-routes)
- [Product Routes](#product-routes)
- [Category Routes](#category-routes)
- [Order Routes](#order-routes)
- [Upload Routes](#upload-routes)

## User Routes

### Register User

- **URL:** `/api/users`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
	```json
	{
		"email": "string",
		"password": "string"
	}
	```
- **Response:**
	```json
	{
		"user": {
			"_id": "string",
			"username": "string",
			"email": "string",
			"password":	"string",
			"isAdmin": "Boolean"
		}
	}
	```

### Login User

- **URL:** `/api/users/auth`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**
	```json
	{
		"email": "string",
		"password": "string"
	}
	```
- **Response:**
	```json
	{
		"user": {
			"_id": "string",
			"username": "string",
			"email": "string",
   			"password": "string",
   			"isAdmin": "Boolean"
		}
	}
	```

### Logout User

- **URL:** `/api/users/logout`
- **Method:** `POST`
- **Description:** Logs out a user.
- **Response:**
	```json
	{
		"message": "User logged out"
	}
	```

### Get User Profile

- **URL:** `/api/users/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the logged-in user.
- **Response:**
	```json
	{
		"_id": "string",
		"username": "string",
		"email": "string"
	}
	```

### Update User Profile

- **URL:** `/api/users/profile`
- **Method:** `PUT`
- **Description:** Updates the profile of the logged-in user.
- **Request Body:**
	```json
	{
		"username": "string",
		"email": "string",
		"password": "string"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"username": "string",
		"email": "string"
	}
	```

### Get All Users (Admin)

- **URL:** `/api/users`
- **Method:** `GET`
- **Description:** Retrieves a list of all users (Admin only).
- **Response:**
	```json
	[
		{
			"_id": "string",
			"username": "string",
			"email": "string"
		}
	]
	```

### Delete User (Admin)

- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Description:** Deletes a user by ID (Admin only).
- **Response:**
	```json
	{
		"message": "User deleted"
	}
	```

### Update User (Admin)

- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Description:** Updates a user by ID (Admin only).
- **Request Body:**
	```json
	{
		"username": "string",
		"email": "string",
		"isAdmin": "boolean"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"username": "string",
		"email": "string",
		"isAdmin": "boolean"
	}
	```

## Product Routes

### Add Product

- **URL:** `/api/products`
- **Method:** `POST`
- **Description:** Adds a new product (Admin only).
- **Request Body:**
	```json
	{
		"name": "string",
		"description": "string",
		"price": "number",
		"category": "string",
		"quantity": "number",
		"brand": "string"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"name": "string",
		"description": "string",
		"price": "number",
		"category": "string",
		"quantity": "number",
		"brand": "string"
	}
	```

### Get All Products

- **URL:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieves a list of all products.
- **Response:**
	```json
	[
		{
			"_id": "string",
			"name": "string",
			"description": "string",
			"price": "number",
			"category": "string",
			"quantity": "number",
			"brand": "string"
		}
	]
	```

### Get Product by ID

- **URL:** `/api/products/:id`
- **Method:** `GET`
- **Description:** Retrieves a product by ID.
- **Response:**
	```json
	{
		"_id": "string",
		"name": "string",
		"description": "string",
		"price": "number",
		"category": "string",
		"quantity": "number",
		"brand": "string"
	}
	```

### Update Product

- **URL:** `/api/products/:id`
- **Method:** `PUT`
- **Description:** Updates a product by ID (Admin only).
- **Request Body:**
	```json
	{
		"name": "string",
		"description": "string",
		"price": "number",
		"category": "string",
		"quantity": "number",
		"brand": "string"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"name": "string",
		"description": "string",
		"price": "number",
		"category": "string",
		"quantity": "number",
		"brand": "string"
	}
	```

### Delete Product

- **URL:** `/api/products/:id`
- **Method:** `DELETE`
- **Description:** Deletes a product by ID (Admin only).
- **Response:**
	```json
	{
		"message": "Product deleted"
	}
	```

### Add Product Review

- **URL:** `/api/products/:id/reviews`
- **Method:** `POST`
- **Description:** Adds a review for a product.
- **Request Body:**
	```json
	{
		"rating": "number",
		"comment": "string"
	}
	```
- **Response:**
	```json
	{
		"message": "Review added"
	}
	```

## Category Routes

### Create Category

- **URL:** `/api/category`
- **Method:** `POST`
- **Description:** Creates a new category (Admin only).
- **Request Body:**
	```json
	{
		"name": "string"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"name": "string"
	}
	```

### Get All Categories

- **URL:** `/api/category/categories`
- **Method:** `GET`
- **Description:** Retrieves a list of all categories.
- **Response:**
	```json
	[
		{
			"_id": "string",
			"name": "string"
		}
	]
	```

### Get Category by ID

- **URL:** `/api/category/:id`
- **Method:** `GET`
- **Description:** Retrieves a category by ID.
- **Response:**
	```json
	{
		"_id": "string",
		"name": "string"
	}
	```

### Update Category

- **URL:** `/api/category/:categoryId`
- **Method:** `PUT`
- **Description:** Updates a category by ID (Admin only).
- **Request Body:**
	```json
	{
		"name": "string"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"name": "string"
	}
	```

### Delete Category

- **URL:** `/api/category/:categoryId`
- **Method:** `DELETE`
- **Description:** Deletes a category by ID (Admin only).
- **Response:**
	```json
	{
		"message": "Category deleted"
	}
	```

## Order Routes

### Create Order

- **URL:** `/api/orders`
- **Method:** `POST`
- **Description:** Creates a new order.
- **Request Body:**
	```json
	{
		"orderItems": [
			{
				"product": "string",
				"quantity": "number"
			}
		],
		"shippingAddress": {
			"address": "string",
			"city": "string",
			"postalCode": "string",
			"country": "string"
		},
		"paymentMethod": "string",
		"itemsPrice": "number",
		"taxPrice": "number",
		"shippingPrice": "number",
		"totalPrice": "number"
	}
	```
- **Response:**
	```json
	{
		"_id": "string",
		"orderItems": [
			{
				"product": "string",
				"quantity": "number"
			}
		],
		"shippingAddress": {
			"address": "string",
			"city": "string",
			"postalCode": "string",
			"country": "string"
		},
		"paymentMethod": "string",
		"itemsPrice": "number",
		"taxPrice": "number",
		"shippingPrice": "number",
		"totalPrice": "number"
	}
	```

### Get All Orders (Admin)

- **URL:** `/api/orders`
- **Method:** `GET`
- **Description:** Retrieves a list of all orders (Admin only).
- **Response:**
	```json
	[
		{
			"_id": "string",
			"orderItems": [
				{
					"product": "string",
					"quantity": "number"
				}
			],
			"shippingAddress": {
				"address": "string",
				"city": "string",
				"postalCode": "string",
				"country": "string"
			},
			"paymentMethod": "string",
			"itemsPrice": "number",
			"taxPrice": "number",
			"shippingPrice": "number",
			"totalPrice": "number"
		}
	]
	```

### Get User Orders

- **URL:** `/api/orders/mine`
- **Method:** `GET`
- **Description:** Retrieves a list of orders for the logged-in user.
- **Response:**
	```json
	[
		{
			"_id": "string",
			"orderItems": [
				{
					"product": "string",
					"quantity": "number"
				}
			],
			"shippingAddress": {
				"address": "string",
				"city": "string",
				"postalCode": "string",
				"country": "string"
			},
			"paymentMethod": "string",
			"itemsPrice": "number",
			"taxPrice": "number",
			"shippingPrice": "number",
			"totalPrice": "number"
		}
	]
	```

### Get Order by ID

- **URL:** `/api/orders/:id`
- **Method:** `GET`
- **Description:** Retrieves an order by ID.
- **Response:**
	```json
	{
		"_id": "string",
		"orderItems": [
			{
				"product": "string",
				"quantity": "number"
			}
		],
		"shippingAddress": {
			"address": "string",
			"city": "string",
			"postalCode": "string",
			"country": "string"
		},
		"paymentMethod": "string",
		"itemsPrice": "number",
		"taxPrice": "number",
		"shippingPrice": "number",
		"totalPrice": "number"
	}
	```

### Mark Order as Paid

- **URL:** `/api/orders/:id/pay`
- **Method:** `PUT`
- **Description:** Marks an order as paid.
- **Response:**
	```json
	{
		"message": "Order is paid"
	}
	```

### Mark Order as Delivered (Admin)

- **URL:** `/api/orders/:id/deliver`
- **Method:** `PUT`
- **Description:** Marks an order as delivered (Admin only).
- **Response:**
	```json
	{
		"message": "Order is delivered"
	}
	```

## Upload Routes

### Upload Image

- **URL:** `/api/upload`
- **Method:** `POST`
- **Description:** Uploads an image.
- **Request Body:**
	- FormData with an image file.
- **Response:**
	```json
	{
		"message": "Image uploaded successfully",
		"image": "string"
	}
	```

## Conclusion

This document provides a comprehensive overview of the API routes available in the backend of the InspireShop project. For more details on each route, refer to the respective controller files in the project repository.