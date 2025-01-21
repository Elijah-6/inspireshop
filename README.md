# InspireShop

InspireShop is an e-commerce platform built using the MERN stack (MongoDB, Express.js, React, Node.js). This project is developed as part of the ALX Software Engineering final project.

## Features

- User Authentication (Login/Register)
- User Profile Management
- Product Browsing and Searching
- Shopping Cart
- Order Placement and Tracking
- Admin Dashboard for Managing Products, Categories, and Users
- PayPal Integration for Payments

## Technologies Used

- **Frontend**: React, Redux, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: PayPal

## Installation

1. Clone the repository:
	```bash
	git clone https://github.com/Elijah-6/inspireshop.git
	cd inspireshop
	```

2. Install dependencies for both frontend and backend:
	```bash
	npm install
	cd frontend
	npm install
	cd ..
	```

3. Create a `.env` file in the root directory and add the following environment variables:
	```env
	MONGO_URI=your_mongodb_connection_string
	PAYPAL_CLIENT_ID=your_paypal_client_id
	```

4. Run the application:
	```bash
	npm run dev
	```

## Scripts

- `npm run backend`: Starts the backend server using nodemon.
- `npm run frontend`: Starts the frontend development server.
- `npm run dev`: Concurrently starts both backend and frontend servers.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the ISC License.

## Contact

For any issues or inquiries, please open an issue on the [GitHub repository](https://github.com/Elijah-6/inspireshop/issues).

## Acknowledgements

- ALX Software Engineering Program
- All contributors and supporters
