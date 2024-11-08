# SYSTEM DESCRIPTION:

QuizTime is an application that makes TV game shows interactive, allowing the audience to play the game by answering the questions asked live in the studio. 
Through a web app, the audience has an interface to choose the correct answers and be included on a scoreboard in the show.
With many participants, the server managing users’ answers is distributed and includes:
    - A set of workers, each handling only a fraction of the total requests to tolerate data bursts.
    - A load balancer, used to split the requests among all the workers.
    - Once all data is received, the workers stop accepting data and send the scores of every player to Elasticsearch.
The application uses Kibana to generate statistical graphs and the scoreboard, which is displayed in the admin interface and in the show for the audience.

# USER STORIES:

1) As a User I want to have a web interface that I can access so that I can play the game
2) As a User I want to have field in the main page where I can add a nickname
3) As a User I want to have I clear way to understand that I am waiting for a question
4) As a User I want to have an easy way to answer the questions asked in the tv program
5) As a User I want to see my final score when the game ends
6) As a User I want to be able to play multiple games with different nickname
7) As a User I want to be able to access again the game in case for some reason I exited
8) As an Admin I want to have an interface that allows me to manage the game
9) As an Admin I want to have in the interface the ability to start a new game
10) As an Admin I want to see the next question number and to select the correct answer from it
11) As an Admin I want a dedicated interface completely disconnected from the users' one
12) As an Admin I want the ability to end the game so to notify the players of their score
13) As an Admin I want to have an overview of the score of the actually playing users
14) As an Admin I want to have an overview of the answers to the last question done
15) As an Admin I want some feature that help me avoid making mistakes such as starting a new question too soon
16) As a Admin I way the system to run on cloud so that I can monitor and balance at need



# CONTAINERS:

## CONTAINER_NAME: ...

### DESCRIPTION: 


### USER STORIES:
1) ...


### PORTS: 


### DESCRIPTION:


### PERSISTANCE EVALUATION


### EXTERNAL SERVICES CONNECTIONS


### MICROSERVICES:

#### MICROSERVICE: ....
- TYPE: 
- DESCRIPTION: 
- PORTS: 


