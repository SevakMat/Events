import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import gql from "graphql-tag";
import { OperationDefinitionNode } from "graphql/language/ast";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const query = req.body.query;

  if (typeof query === "string") {
    try {
      const ast = gql(query);
      const operation = (ast.definitions as OperationDefinitionNode[]).find(
        (def) => def.operation === "mutation"
      );
      if (operation) {
        const name = operation.name.value;
        if (name === "SignIn" || name === "SignUp") {
          return next(); // Skip authentication for login and registration
        }
      }
    } catch (error) {
      return res.status(400).send("Invalid GraphQL query.");
    }
  }

  const auth = req.headers.authorization;

  if (auth) {
    const token = decode(auth.replace("Bearer", "").trim());
    next();
  } else {
    return res.status(401).json({
      message: "UnAuthorized",
    });
  }
};

export default authMiddleware;
