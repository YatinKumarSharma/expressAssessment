 I have chosen express and mongo for the assessment. 
 
 Some of the reasons are for expressJs are :-
  Ease of Use: Lightweight and flexible for various project sizes.
  Middleware Support: Robust middleware system for handling HTTP requests.
  Community and Ecosystem: Large and active community, extensive documentation, and third-party modules.
  Scalability: Adaptable for both small projects and large-scale applications.
 
 For MongoDb :-
  Schema-less Design: JSON-like document format for flexible data structures.
  Horizontal Scalability: Supports distributing data across multiple servers or clusters.
  Query Language and Indexing: Powerful query language and indexing for efficient data retrieval.
  Document-Oriented Model: Aligns well with modern application structures, simplifying development.

 For Rate-Limit :-   Used express-rate-limiter

 For Security   :-   Used JWT for authorization purpose



 
 package.json
 
 {
  "name": "assessment",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "nodemon backend/server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "express-rate-limit": "^7.1.4",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.3.0",
    "mongoose": "^8.0.1",
    "nodemon": "^3.0.1"
  }
}


write npm start in terminal



For User APIs      ({{URL}}  is http://localhost:5000 )

for signup  ->       {{URL}}/api/users
for login   ->       {{URL}}/api/users/login

For Notes Api

For Getting all the notes               ->       {{URL}}/api/notes                       ->  Get
FOr Creating Notes                      ->       {{URL}}/api/notes/create                ->  Post
For Getting notes with specific id      ->       {{URL}}/api/notes/:id                   -> Get
For Updating noted with specific id     ->       {{URL}}/api/notes/:id                   -> Put
For Deleting a note                     ->       {{URL}}/api/notes/:id                   -> Delete
For searching a note based on kwywords  ->       {{URL}}/api/notes/search?q=your_query   -> Get 

