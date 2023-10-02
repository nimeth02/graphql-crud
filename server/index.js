require('dotenv').config();
var { graphqlHTTP } = require("express-graphql")
const express = require('express');
const schema=require('./schema.js')
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development' ,
    })
  )

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});