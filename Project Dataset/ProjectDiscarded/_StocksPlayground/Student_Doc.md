# SYSTEM DESCRIPTION:

Main GOALS:
- Stock market
    Display the main features and trends of the stock market
- Crypto Market
    Display the main features and trends of the crypto market
- Searched Stock
    Display the information about a searched stock
- Favorite Stocks
    Save into a list the most interesting stocks

# USER STORIES:

(1) As a website visitor, I want to be able to get information about the mainstocks in each sectors, so that I can have an overview of the market’s state
(2) As a website visitor, I want to be able to display a sliding view of the main tickers and their gains/losses, so that I can have an overview of the market’s state
(3) As a website visitor, I want to be able to view which is the hottest sector in the market, so that I can have a better understanding of the trends
(4) As a website visitor, I want to be able to know the biggest gainer and the biggest loser in a compact view, so that I can have an overview of the market’s state
(5) As a website visitor, I want to be able view a sorted list of the biggest gainers and the biggest losers, so that I can have an overview of the market’s state
(6) As a website visitor I want to see the page loading, so that I can understand that my request is working
(7) As a webiste visitor, I want to be able to get informations about the main index, so that I can have an overview of the market’s state
(8) As a webiste visitor, I want to be able to get an overview of the latests market news, so that I can be informed of meaningful events
(9) As a website visitor, I want to be able to navigate to the website the new are from, so that I can get read the whole article
(10) As a webiste visitor, I want to be able to search for a specific stock, so that I can get the specific information I seek
(11) As a webiste visitor, I want to be able to view the information of a specific stock such as the candle stick graph, so that I can get the specific information I seek
(12) As a website visitor, I want to be able to register an account, so that I can have a more personalized experience
(13) As a webiste visitor, I want to be able to login to my account, so that I can have a more personalized experience
(14) As a logged user, I want to be able to logout, so that I can terminate my session when I’m done using the website
(15) As a logged user, I want to be able to delete my account, so that I can remove my account from the application
(16) As a logged user, I want to customize my profile’s information, so that can customize my experience
(17) As a logged user, I want to be able to save my favorite stocks to keep track of my own interests
(18) As a logged user, I want to be able to show my favorite stocks to keep track of my own interests
(19) As a logged user, I want to be able to delete my favorite stocks to keep track of my own interests
(20) As a website visitor, I want to be able to get informations about the main cryptoccurencies into a treemap, so that I can have an overview of the crypto market’s state
(21) As a website visitor, I want to be able to get informations about the most trending cryptoccurencies, so that I can have an overview of the crypto market’s state
(22) As a website visitor, I want to be able to get informations about the most famous cryptoccurencies, so that I can have an overview of the crypto market’s state


# CONTAINERS:

## CONTAINER_NAME: StocksPlayground

### DESCRIPTION: 


### USER STORIES:
(1) As a website visitor, I want to be able to get information about the mainstocks in each sectors, so that I can have an overview of the market’s state
(2) As a website visitor, I want to be able to display a sliding view of the main tickers and their gains/losses, so that I can have an overview of the market’s state
(3) As a website visitor, I want to be able to view which is the hottest sector in the market, so that I can have a better understanding of the trends
(4) As a website visitor, I want to be able to know the biggest gainer and the biggest loser in a compact view, so that I can have an overview of the market’s state
(5) As a website visitor, I want to be able view a sorted list of the biggest gainers and the biggest losers, so that I can have an overview of the market’s state
(6) As a website visitor I want to see the page loading, so that I can understand that my request is working
(7) As a webiste visitor, I want to be able to get informations about the main index, so that I can have an overview of the market’s state
(8) As a webiste visitor, I want to be able to get an overview of the latests market news, so that I can be informed of meaningful events
(9) As a website visitor, I want to be able to navigate to the website the new are from, so that I can get read the whole article
(10) As a webiste visitor, I want to be able to search for a specific stock, so that I can get the specific information I seek
(11) As a webiste visitor, I want to be able to view the information of a specific stock such as the candle stick graph, so that I can get the specific information I seek
(12) As a website visitor, I want to be able to register an account, so that I can have a more personalized experience
(13) As a webiste visitor, I want to be able to login to my account, so that I can have a more personalized experience
(14) As a logged user, I want to be able to logout, so that I can terminate my session when I’m done using the website
(15) As a logged user, I want to be able to delete my account, so that I can remove my account from the application
(16) As a logged user, I want to customize my profile’s information, so that can customize my experience
(17) As a logged user, I want to be able to save my favorite stocks to keep track of my own interests
(18) As a logged user, I want to be able to show my favorite stocks to keep track of my own interests
(19) As a logged user, I want to be able to delete my favorite stocks to keep track of my own interests
(20) As a website visitor, I want to be able to get informations about the main cryptoccurencies into a treemap, so that I can have an overview of the crypto market’s state
(21) As a website visitor, I want to be able to get informations about the most trending cryptoccurencies, so that I can have an overview of the crypto market’s state
(22) As a website visitor, I want to be able to get informations about the most famous cryptoccurencies, so that I can have an overview of the crypto market’s state


### PORTS: 


### DESCRIPTION:


### PERSISTANCE EVALUATION:


### EXTERNAL SERVICES CONNECTIONS:


### MICROSERVICES:

#### MICROSERVICE: nginx
- TYPE: middleware
- DESCRIPTION: 
- PORTS: 80-443

#### MICROSERVICE: spring
- TYPE: backend
- DESCRIPTION: 
- PORTS: internal


