import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import gql from "graphql-tag";
import { OperationDefinitionNode } from "graphql/language/ast";

// Authentication middleware function
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const query = req.body.query;

  if (typeof query === "string") {
    try {
      // Parsing the GraphQL query to AST (Abstract Syntax Tree)
      const ast = gql(query);
      // Finding the operation definition (query or mutation)
      const operation = (ast.definitions as OperationDefinitionNode[]).find(
        (def) => def.operation === "mutation"
      );
      if (operation) {
        const name = operation.name.value;
        if (name === "SignIn" || name === "SignUp") {
          return next();
        }
      }
    } catch (error) {
      return res.status(400).send("Invalid GraphQL query.");
    }
  }

  const auth = req.headers.authorization;

  if (auth) {
    // Decoding the JWT token from the authorization header
    const token = decode(auth.replace("Bearer", "").trim());
    next(); // Proceed to the next middleware
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default authMiddleware;
