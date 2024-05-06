const { readFileSync } = require("fs");
const { join } = require("path");

const authSchema = readFileSync(
  join(__dirname, "schema", "authSchema.graphql"),
  "utf8"
);
const eventSchema = readFileSync(
  join(__dirname, "schema", "eventSchema.graphql"),
  "utf8"
);
const commentSchema = readFileSync(
  join(__dirname, "schema", "commentSchema.graphql"),
  "utf8"
);

export const RootSchema = [authSchema, eventSchema, commentSchema];
