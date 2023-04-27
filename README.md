# apitest

This is a simple API test project. It consists of a Node.js application that provides a few routes to access and manipulate data.

## Prerequisites

Make sure you have Docker installed on your machine.

## Usage

To use this application, follow the steps below:

1. Clone the repository:

git clone https://github.com/your-username/apitest.git


2. Go to the project directory:
cd apitest


3. Build the Docker image:
docker build -t apitest .


4. Run the container:
docker run -p 3333:3333 -d apitest


Now you can access the API by navigating to `http://localhost:3333` in your web browser or by using a tool like cURL or Postman.

## Routes

- `/company`: Lists all companies created.
- `/employee`: Lists all employees of all companies.
- `/profile`: Requires the company ID in the request header and lists all employees of that company.

That's it! Enjoy the API.
