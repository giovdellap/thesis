# Initial

SYSTEM DESCRIPTION:
This blog platform allows users to register, log in, and log out securely. Once logged in, users can read articles, view comments on each article, and contribute their own comments. The platform features a user-friendly interface that makes navigation and interaction straightforward. Articles are displayed in a list format on the homepage, with individual article pages showing the full content and associated comments. The system ensures that all comments are attributed to registered users, promoting accountability and constructive discussions.

USER STORIES:
1) As a new user, I want to register an account so that I can log in and interact with the blog.
2) As a registered user, I want to log in to my account so that I can access and interact with the platform.
3) As a logged-in user, I want to log out of my account so that I can securely end my session.
4) As a user, I want to read a list of articles on the homepage so that I can choose which articles to read in full.
5) As a user, I want to click on an article title to read the full content so that I can engage with the material.
6) As a user, I want to see all comments associated with an article so that I can read others' opinions and insights.
7) As a logged-in user, I want to comment on an article so that I can share my thoughts and engage in discussions.


# Archi_1

CONTAINERS:
- CONTAINER NAME: Authentication
    - DESCRIPTION: Deals with registration, login, session management, and security aspects to prevent unauthorized access
    - USER STORIES: 
        1) As a new user, I want to register an account so that I can log in and interact with the blog.
        2) As a registered user, I want to log in to my account so that I can access and interact with the platform.
        3) As a logged-in user, I want to log out of my account so that I can securely end my session.
    - PORTS: 10000:10100
- CONTAINER NAME: Articles
    - DESCRIPTION: Deals with articles search and read
    - USER STORIES:
        4) As a user, I want to read a list of articles on the homepage so that I can choose which articles to read in full.
        5) As a user, I want to click on an article title to read the full content so that I can engage with the material.
        6) As a user, I want to see all comments associated with an article so that I can read others' opinions and insights.
    - PORTS: 11000:11100
UNASSIGNED:
    7) As a logged-in user, I want to comment on an article so that I can share my thoughts and engage in discussions.


# Archi_2

CONTAINERS:
- CONTAINER NAME: Authentication
    - DESCRIPTION: Deals with registration, login, session management, and security aspects to prevent unauthorized access
    - USER STORIES: 
        1) As a new user, I want to register an account so that I can log in and interact with the blog.
        2) As a registered user, I want to log in to my account so that I can access and interact with the platform.
        3) As a logged-in user, I want to log out of my account so that I can securely end my session.
    - PORTS: 10000:10100
- CONTAINER NAME: Articles
    - DESCRIPTION: Deals with articles search and read
    - USER STORIES:
        4) As a user, I want to read a list of articles on the homepage so that I can choose which articles to read in full.
        5) As a user, I want to click on an article title to read the full content so that I can engage with the material.
        6) As a user, I want to see all comments associated with an article so that I can read others' opinions and insights.
    - PORTS: 11000:11100
- CONTAINER NAME: Frontend
    - DESCRIPTION: Handles the frontend exposure to the user and acts as a starting endpoint for the system
    - PORTS: 12000:12100

UNASSIGNED:
    7) As a logged-in user, I want to comment on an article so that I can share my thoughts and engage in discussions.

# Container_1

The Authentication container is responsible for handling registration of the users, login and logout. It also manages credentials storage and retrieval, along with the authentication tokens' management

# Container_2

PERSISTANCE EVALUATION
The container needs to store credentials in order to manage registration and login.
The credentials are tuples username, passsword.
The container also needs to store authentication tokens.

EXTERNAL SERVICES CONNECTIONS
Based on the container's behaviour and purpose, there is no need for the container to connect to external services.

# Container_3
MICROSERVICE: auth
- TYPE: backend
- DESCRIPTION: The microservice handles registration, login and logout operations for the users. It exposes endpoints to access these operations. For the registration operation, the microservice interacts with the database to ensure that the user is not already registered. For the login operation, the microservice interacts with the database to validate credentials, then produces a token, stores it in the DB and returns it to the user. For the logout operation, the microservice removes the token from the database. The microservice also exposes enpoints for other containers/microservices to validate authentication tokens.
- PORT: 10010

MICROSERVICE: storage
- TYPE: database
- DESCRIPTION: The microservice stores credentials in the form username-password. It also stores authentication tokens.
- PORT: 10020