# Guestbook -- MERN stack

It's a web app project that resembles gustbook where gusts/visitors create an acount and leave a comment/note conguratlation and owner and guest could reply to each other and communicate


### Prerequisites

npm node, creat-react-app installed in  your machine 

### Installing

To start server move into server directory and run those instrauctions in squence
```
npm install

You got get message that server is listening



```
To start client move into client directory and run those instrauctions in squence
```
npm install
```
npm start
```
until finished
```


## Feature developed in the client side

- crate and acount validate inputs and return errors
- login with credentials and user get access token valid for 24 hours
- alert system is developed to handle server messages and to interacte wwith user through
- managing auth state through redux 
- authenticate user through refrech using jasonweb token that is saved in httpOnly with no local storage 
- user can add post and also can add or edit his own post/reply
- allow only reply or post owner to delete and edit his own post
- allow only authenticated user to post and reply
- add, edit, delet, reply are dynamically rendered as they are managed with redux
- no library  or third party backage is used, all component/fonts are developed
'

## Feature developed create in the server side

- the project has two models: user an post
- post has reply embedded model
- password is encrybted before being saved to database
- folder structure is devided into conroroller, routes and models
- two midlleware wares are developed to protect resources; reuire auth and reuire admin
- reuireAuth is used against any request that tries to access authenticated user resources, it extracts cookie and verify it and 
check if it's valid or expired, if it's valid it will attach the user claims used to creat the token to 
and attach it to the the reuest and pass it to the next ,iddleware.

