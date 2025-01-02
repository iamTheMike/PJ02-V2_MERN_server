# API - Blog Platform

## Description
This API is an edited version of PJ01-MERN-Server, 
modified to use local databases such as MySQL, MongoDB,  and  Docker support. 
It is a RESTful API built with Node.js, Express, and other essential libraries. The API provides a blogging platform with user authentication features and integrates Swagger for auto-generated documentation.


### Feature
  * Blog Routes:  Endpoints for creating, updating, and deleting blog posts.
  * Authenitcation Routes: Handles user authentication, including Login and registration, 2FA via OTP sent to email, Google OAuth2 integration.
  * Swagger Documentation: Automatically generated API documentation for easy reference.
  * Docker: Provides containerized environments for efficient development and deployment

### Technologies Used
 * Node.js : Provider the backend environment for this API
 * Express Framework : is used to handle requests, routing.
 * MongoDB  : Mongoose schemas is used for modeling  Blog data
 * Mysql : mysql2 is used for modeling user data
 * Google Cloud : Used for handling user image files.
 * Docker:  Provides containerized environments
 
### Database Seed
 * MySql will create database named MERN01 with a users table including an admin role

### ENV
  * Create`.env` file ,See example in   .env.example
  

## Installation
```
git clone https://github.com/iamTheMike/PJ01_MERN_server.git
cd project
docker-compse up -d --build
```










        
  
  

