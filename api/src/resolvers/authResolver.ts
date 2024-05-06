import User from "../models/user";
import jwt from "jsonwebtoken";
import { decode } from "jsonwebtoken";

// Resolver for authentication-related GraphQL queries and mutations
const authResolver = {
  Query: {
    // Resolver for checking login status using a token
    checkOutLogin: async (_, { CheckOutLoginFormInput: { token } }) => {
      try {
        // Decoding the token to extract email information
        const decodeToken: any = decode(token.replace("Bearer", "").trim());
        const email = decodeToken?.email;
        if (email) {
          // Finding the user based on the decoded email
          const user = await User.findOne({ email });
          return user;
        }
      } catch (error) {
        // Handling token verification errors
        console.error("Error during token verification:", error);
        throw new Error("Invalid token");
      }
    },
  },
  Mutation: {
    login: async (_, { LoginFormInput: { email, password } }) => {
      try {
        // Finding the user based on the provided email
        const user = await User.findOne({ email });

        // Validating user credentials

        if (!user) {
          throw new Error("You are not registreated yet");
        }

        if (!user.validPassword(password)) {
          throw new Error("Invalid email or password");
        }

        // Generating JWT token for authenticated user
        const token = jwt.sign(
          {
            email: user.email,
            userId: user.id,
          },
          process.env.SECRET,
          {
            expiresIn: "12h",
          }
        );

        user.token = token;
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    // Resolver for user sign up
    signUp: async (
      _,
      {
        SignUpFormInput: {
          email,
          firstName,
          lastName,
          age,
          gender,
          phone,
          password,
        },
      }
    ) => {
      try {
        // Checking if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("Email already exists");
        }
        // Creating a new user object
        const newUser = new User({
          email,
          firstName,
          lastName,
          age,
          gender,
          phone,
        });
        // Encrypting the user's password before saving it
        newUser.password = await newUser.encryptPassword(password);
        // Saving the new user to the database
        await newUser.save();
        return { success: true };
      } catch (error) {
        throw new Error(error?.message);
      }
    },
  },
};

export default authResolver;
