import path from "path";
import cors from "cors";
import express from "express";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
import authMiddleware from "./middleware/auth.middleware";
import { RootSchema } from "./schema";
import { RootResolver } from "./resolvers";
import cookieParser from "cookie-parser";

// Create an instance of Express application
const app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Enable CORS with options for allowing credentials and all origins
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

// Create GraphQL schema using executable schema
const schema = makeExecutableSchema({
  typeDefs: RootSchema, // GraphQL schema definitions
  resolvers: RootResolver, // Resolver functions for GraphQL queries
});

app.use(
  "/graphql",
  authMiddleware, // Custom authentication middleware
  graphqlHTTP({
    schema: schema, // GraphQL schema to be used
    graphiql: true, // Enable GraphiQL for development purposes
  })
);

export default app;
