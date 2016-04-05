Goal
---------------------------------------------------------------------------------------------------------
Create nodejs express project with basic mongoDB connection and adding few records. 

Project Build Steps
---------------------------------------------------------------------------------------------------------
1) npm install express-generator -g (in case express-generator is not installed. )
2) express expressMongo (this will create 'expressMongo' folder with basic file)
3) npm install (this will create node_modules with all dependency as mentioned in package.json)
3) npm start , 
4) http://localhost:3000/


Start NodeJs
---------------------------------------------------------------------------------------------------------
npm start

Run on Browser 
---------------------------------------------------------------------------------------------------------
http://localhost:8000 (index.jade will be called which in turn will run mongoDb connection & insert records)
http://localhost:3000/users (will call user route)
http://localhost:3000/test.html (public URL)


Run Mongo Server   (another command prompt)
---------------------------------------------------------------------------------------------------------
mongod --config C:\mongodb\mongo.config


 Mongo Testing to see if records exists in DB
---------------------------------------------------------------------------------------------------------

1) type mongo (mongo shell)
2) use exampleDb
3) db.test.find() (this will show four records after visiting URL http://localhost:3000. 'test' is collection name)


Routing  using node
---------------------------------------------------------------------------------------------------------
var routes = require('./routes/index');  (is tied to =>)   app.use('/', routes);   ( so landing url index.jade is called note this not  index.html but jade template)
var users = require('./routes/users');  (is tied to =>) app.use('/users', users); (this route is excuted for if  localhost url  is ended with /users)