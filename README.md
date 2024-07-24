# Baby Clothes Marketplace

Welcome to the Baby Clothes Marketplace! This application is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to facilitate the buying, trading, and requesting of baby clothes. Users can post clothing items, search for specific styles, and view items based on their location.

## Features

- **User Authentication**: Secure user registration and login.
- **Item Management**: Users can create, read, update, and delete their own items.
- **Item Search and Filters**: Search for items based on keywords and filter by size, condition, and availability (in progress).
- **User Profiles**: View and manage user profiles, including their listed items.
- **Responsive Design**: The app is designed to be fully responsive for mobile devices.

## Technologies Used

- **Frontend**: React, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Deployment**: AWS EC2 (using the free tier)

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed
- MongoDB database (local or hosted)
- AWS Account for deployment (optional)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/baby-clothes-marketplace.git
    cd baby-clothes-marketplace
    ```

2. **Install Backend Dependencies**

    Navigate to the `server` directory and install the backend dependencies.

    ```bash
    cd server
    npm install
    ```

3. **Install Frontend Dependencies**

    Navigate to the `client` directory and install the frontend dependencies.

    ```bash
    cd ../client
    npm install
    ```

4. **Environment Variables**

    Create a `.env` file in the `server` directory with the following variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

    (Replace `your_mongodb_connection_string` with your MongoDB connection URI and `your_jwt_secret` with a secret key for JWT.)

5. **Run the Application**

    In separate terminals, start the backend and frontend servers.

    ```bash
    # In the server directory
    npm start

    # In the client directory
    npm start
    ```

6. **Deployment**

    To deploy the application on AWS EC2, follow the [AWS deployment guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) and use the `build` script to create a production build for the frontend.

## Usage

- **User Registration and Login**: Access the registration and login forms through modals in the React app.
- **Adding Items**: Navigate to the items page to add new items.
- **Viewing and Managing Items**: Users can view, update, and delete their items from their profile page.
- **Searching and Filtering**: Use the search and filter options to find specific items. (in progress)

## Contributing

If you want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Acknowledgements

- [MERN Stack](https://www.mongodb.com/mern-stack)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [AWS Documentation](https://docs.aws.amazon.com/)

---

