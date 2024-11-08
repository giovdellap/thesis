# SYSTEM DESCRIPTION:

CDC shop is a distributed system that handles the management, the payment and the shipment of products: in particular for materials that you can usually find in an hardware store.

# USER STORIES:
1) As a Customer, I want to be able to register in order to have an account 
2) As a Customer, I want to be able to login
3) As a Customer, I want to be able to have access to my profile
4) As a Customer, I want to see my current shopping cart
5) As a Customer, I want to order the products for ascending/descending price
6) As a Customer, I want to retrieve a product by giving its name in a search bar
7) As a Customer, I want to pay for the current shopping cart
8) As a Customer, I want to logout from the profile by clicking on a button
9) As a Customer, I want to check my order to see informations about my package
10) As a Customer, I want to access the About Us page
11) As a Customer, I want to see the list of products
12) As a Customer, I want to see the details of a product
13) As a Merchant, I want to logout from the profile by clicking on a button
14) As an Merchant, I want to be able to login to the Merchant page
15) As an Merchant, I want to change the price of a product
16) As an Merchant, I want to insert/remove products
17) As an Merchant, I want to order the products for ascending/descending price
18) As an Merchant, I want to retrieve a product by giving its name in a search bar
19) As an Merchant, I want to access to my profile
20) As an Merchant, I want to access the About Us page
21) As an Merchant, I want to see the list of products
22) As an Merchant, I want to see the details of a product
23) As a Customer, I want to contact the shop for any doubt
24) As a Customer, I want to be able to add a product on my cart
25) As a Customer, I want to be able to remove all the items in my cart

# CONTAINERS:

## CONTAINER NAME: User_Account_Management

### DESCRIPTION:
Manages user authentication, registration, profile management, and session control.

### USER STORIES:
1) As a Customer, I want to be able to register in order to have an account
2) As a Customer, I want to be able to login
3) As a Customer, I want to be able to have access to my profile
8) As a Customer, I want to logout from the profile by clicking on a button
13) As a Merchant, I want to logout from the profile by clicking on a button
14) As a Merchant, I want to be able to login to the Merchant page
19) As a Merchant, I want to access to my profile

### PORTS: 10000:10100

## CONTAINER NAME: Shopping_Cart

### DESCRIPTION: 
Handles customer shopping cart functionality, including displaying and updating the cart's contents.

### USER STORIES:
4) As a Customer, I want to see my current shopping cart
7) As a Customer, I want to pay for the current shopping cart

### PORTS: 10500:10600

## CONTAINER NAME: Product_Search_and_Management

### DESCRIPTION: 
Manages product listing, searching, details viewing, price adjustment and product CRUD operations for both customers and merchants.

### USER STORIES:
5) As a Customer, I want to order the products for ascending/descending price
6) As a Customer, I want to retrieve a product by giving its name in a search bar
11) As a Customer, I want to see the list of products
12) As a Customer, I want to see the details of a product
15) As a Merchant, I want to change the price of a product
16) As a Merchant, I want to insert/remove products
17) As a Merchant, I want to order the products for ascending/descending price
18) As a Merchant, I want to retrieve a product by giving its name in a search bar
21) As a Merchant, I want to see the list of products
22) As a Merchant, I want to see the details of a product

### PORTS: 10700:10800

## CONTAINER NAME: Order_Tracking

### DESCRIPTION: 
Handles the logistics and tracking of orders to keep customers informed about their packages.

### USER STORIES:
9) As a Customer, I want to check my order to see informations about my package

### PORTS: 10200:10300

## CONTAINER NAME: Static_Content

### DESCRIPTION: 
Serves static content such as "About Us" and provides a contact form.

### USER STORIES:
10) As a Customer, I want to access the about us page
20) As a Merchant, I want to access the about us page
23) As a Customer, I want to contact the shop for any doubt

### PORTS: 10900:11000

## CONTAINER NAME: Frontend

### DESCRIPTION: 
Handles the frontend exposure to the user and acts as a starting endpoint for the system.

### PORTS: 12000:12100
