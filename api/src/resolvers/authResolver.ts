import User from "../models/user";
import jwt from "jsonwebtoken";
import { decode } from "jsonwebtoken";

const authResolver = {
  Query: {
    checkOutLogin: async (_, { CheckOutLoginFormInput: { token } }) => {
      try {
        const decodeToken: any = decode(token.replace("Bearer", "").trim());
        const email = decodeToken?.email;
        if (email) {
          const user = await User.findOne({ email });
          return user;
        }
      } catch (error) {
        console.error("Error during token verification:", error);
        throw new Error("Invalid token");
      }
    },
  },
  Mutation: {
    login: async (_, { LoginFormInput: { email, password } }) => {
      try {
        const user = await User.findOne({ email });
        if (!user || !user.validPassword(password)) {
          throw new Error("Invalid email or password");
        }

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
        console.error("Error logging in:", error);
        throw new Error("An error occurred during login");
      }
    },
    signUp: async (_, { SignUpFormInput: { email, password } }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("Email already exists");
        }

        const newUser = new User({ email });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        return { success: true };
      } catch (error) {
        console.error("Error signing up:", error);
        return { success: false };
      }
    },
  },
};

export default authResolver;
