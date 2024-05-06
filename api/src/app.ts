import path from "path";
import cors from "cors";
import express from "express";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from "express-graphql";
import authMiddleware from "./middleware/auth.middleware";
import { RootSchema } from "./schema";
import { RootResolver } from "./resolvers";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

const schema = makeExecutableSchema({
  typeDefs: RootSchema,
  resolvers: RootResolver,
});

app.use(
  "/graphql",
  authMiddleware,
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

export default app;
