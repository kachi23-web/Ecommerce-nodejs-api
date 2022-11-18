# Ecommerce-nodejs-api
Nodejs-ecommerce Api 

#some of the features in this api are yet to be implemented; the development of this api is still in progress

Node.js E-Commerce API This full E-Commerce API build using Express and Mongo. Here it contains all the required functionalities of a full-fledged E-commerce API like User registration, User Login, Category Add, Edit & Delete, Product Add, Edit, Delete, Add product feature image & Add product images, Order creation and etc...

#Setup $ git clone https://github.com/kachi23-web/Ecommerce-nodejs-api.git $ cd ecommerce-nodejs $ npm install Duplicate and database.eshop.js as eshop.js and fill in environment variables Run The Service $ nodemon server.js API Endpoints User Routes

#Create User POST | /api/auths/register
Key Value name Admin email admin@admin.com password password isAdmin true

Login User POST | /api/auths/login
Key Value email admin@admin.com password password

Get Users GET | /api/users/

Get Single Users GET | /api/users/{id}

Delete User DELETE | /api/users/{id}

Get Users Stat GET | /api/v1/users/stat

Category Routes

#Create Category POST | /api/v1/categories
Key Value name Category 1 icon icon-health color #55879

Get Categories GET | /api/categories

Get Single Category GET | /api/categories/{id}

Update Category PUT | /api/categories/{id}

Key Value name Category 1 icon icon-health color #55879

Delete Category DELETE | /api/categories/{id}
Product Routes

Create Product POST | /api/products
Key Value name Product 1 description Description richDescription Rich Description image image brand Brand 1 price 50 category {category_id} countInStock 100 rating 4.5 numReviews 40 isFeatured true

Get Products GET | /api/v1/products

Get Single Category GET | /api/v1/products/{id}

Get Prodcut Counts GET | /api/v1/products/get/count

Get Featured Prodcut Counts GET | /api/v1/products/get/featured/{count}

Upload Galley Images POST | /api/v1/products/gallery-images/{id}

Key Value images Array of images

Update Product PUT | /api/v1/products
Key Value name Product 1 description Description richDescription Rich Description image image brand Brand 1 price 50 category {category_id} countInStock 100 rating 4.5 numReviews 40 isFeatured true

Delete Product DELETE | /api/v1/products/{id}
Orders Routes

Create Order POST | /api/v1/orders
{ "orderItems":[ { "quantity": 3, "product" : "602e9c348e700335d8532b14" }, { "quantity": 2, "product" : "602bde0161fcc409fc149734" } ], "shippingAddress1" : "No 45,Park Street", "shippingAddress2" : "No 46,Main Street", "city" : "Colombo", "zip" : "10600t", "country" : "Sri Lanka", "phone" : "+94717185748", "user" : "602e9b718e700335d8532b13" }

Get Orders GET | /api/v1/orders

Get Single Order GET | /api/v1/orders/{id}

Get Total Order Count GET | /api/v1/orders/get/count

Get Total Sales GET | /api/v1/orders/get/totalsales

Get User Order GET | /api/orders/get/usersorders/{userid}

Update Single Order PUT | /api/orders/{id}

Delete Single Order DELETE | /api/orders/{id}
