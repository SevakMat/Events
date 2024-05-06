import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("Database connected!");
  } catch (e) {
    console.error("Database Error: ", e);
  }
};

export default db;
