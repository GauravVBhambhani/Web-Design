# Assignment 9

### Technologies used : 
1. Nodejs
2. Expressjs
3. Reactjs
4. MongoDB

### Libraries used :
1. bcryptjs - This module enables storing of passwords as hashed passwords instead of plaintext.

2. cors - tands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

3. dotenv - DotEnv is a lightweight npm package that automatically loads environment variables from a . env file into the process. env object.

4. express - web application framework of nodejs.

5. jsonwebtoken - A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.

6. mongoose - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

7. nodemon - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### Pages Implemented
folder : assignment_nine -> src
1. App.js : used 'react-router-dom' library to develop the navbar on the main page and route to other pages.
    -> used BrowserRouter, Routes, Route, Link tags to navigate to other pages. 

folder : assignment_nine -> src -> pages 
1. About.js : A simple page which contains a card developed using the react components.
2. Account.js : 

3. Contact.js : contains a list of companies created using the react map() function.

4. Home.js : Contains the Signin module which takes in email and password, and if those credentials exist in the mongodb database, it will redirect to Account.js.

5. Jobs.js : Contains multiple job listings in card form developed using react components.

folder : assignment_nine -> src -> style
1. Contact.css
2. Home.css
3. Jobs.css


folder : assigment_eight -> models
1. userSchema.js : contains the user details schema where we have mentioned to take name, email and password as input of signing up.

folder : assignment_eight
1. server.js : contains the signup and signin API. It also contains the API which post's the user details on the Account.js page after successful login.
