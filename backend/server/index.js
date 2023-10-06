require('dotenv').config();
var { graphqlHTTP } = require("express-graphql")
const express = require('express');
const connectDb=require('../config/db')
const color=require('colors')
const schema=require('./schema.js')
const app = express();
const cors=require('cors')

const PORT = process.env.PORT || 3000;
connectDb()
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(
    "/graphql", 
    (req, res, next) => {
      // Log information about the incoming request
      console.log(`Received GraphQL request at ${new Date()}`);
      next(); // Continue to the GraphQL middleware
    },
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development' ,
    })
  )

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bold);
});