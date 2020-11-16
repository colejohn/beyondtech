require("dotenv").config();
const graphqlHTTP = require('express-graphql')
const { GraphQLServer, PubSub } = require( 'graphql-yoga');
const mongoose = require('mongoose')

import  schema from './graphql';
const { models } = require('./models')

const { mongoURI: db } = process.env;
const pubsub = new PubSub();
const options = {
    port: process.env.PORT || "4000",
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
    cors: {
      origin: "*",
      credentials: true,
    },
};
const context = {
    models, 
    pubsub
}
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


const server = new GraphQLServer({
    schema,
    context,
  });
  
  server.start(options, ({ port }) => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
  