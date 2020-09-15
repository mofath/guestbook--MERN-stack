# Guestbook -- MERN stack

It's a web app project that resembles gustbook where gusts/visitors create an acount and leave a comment/note conguratlation and owner and guest could reply to each other and communicate


### Prerequisites

npm node, creat-react-app installed in  your machine 





## Feature developed in the client side

- create an account validate inputs and return errors
- login with credentials and user get access token valid for 24 hours
- alert system is developed to handle server messages and to interacte with user for beter UX
- managing auth state through redux 
- authenticate user through refrech using jsonweb token that is saved in httpOnly cookie with no local storage 
- user can add post and also can delete/edit his own post/reply
- allow only post/reply owner to edit and delete his own post/reply
- allow only authenticated user to post and reply
- add, edit, delete, reply are dynamically rendered as they are managed with redux
- no library or third party backage is used, all component are developed
'

## Feature developed in the server side

- the project has two models: user and post
- post has reply embedded model (:instead of separate model to reduce populate operation )
- password is encrybted before being saved to database
- folder structure is devided into conroroller, routes and models
- all API's follow REST style architecture 
- two midlleware ware developed to protect resources; reuire auth and reuire admin:
    reuireAuth is used against any request that tries to access authenticated user resources, it extracts cookie and verify it and 
    check if it's valid or expired, if it's valid it will attach the user claims used to creat the token to the the reuest and pass it to the next middleware.


## Design Gallery

#### Landing screen: Singup component rendered
![01](https://user-images.githubusercontent.com/58465052/93178457-92b64400-f734-11ea-8056-0569b55001aa.png)
#### Landing screen: Login component rendered
![02](https://user-images.githubusercontent.com/58465052/93179935-aa8ec780-f736-11ea-93db-4f365c0df955.png)
#### Landing screen: Singup component rendered: input validation
![03](https://user-images.githubusercontent.com/58465052/93181353-a95e9a00-f738-11ea-9bb5-595b5634e2a6.png)
#### Landing screen: Singup component rendered: authentication
![04](https://user-images.githubusercontent.com/58465052/93182113-95fffe80-f739-11ea-9dda-1ccb7be69f01.jpg)
#### Landing screen: Header section
![05](https://user-images.githubusercontent.com/58465052/93182513-10308300-f73a-11ea-8e0b-c88865907ddc.jpg)
#### Landing screen: Posts wall: no posts rendered
![06](https://user-images.githubusercontent.com/58465052/93182844-77e6ce00-f73a-11ea-9130-07a0e7149788.jpg)
#### Landing screen: Posts wall: posts rendered
![07](https://user-images.githubusercontent.com/58465052/93184317-5edf1c80-f73c-11ea-80aa-b1d65c2194d7.jpg)




