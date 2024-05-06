import dotenv from "dotenv";
dotenv.config();
import app from "./src/app";
import db from "./src/db";

const PORT = process.env.PORT || 8000;

async function start() {
  try {
    await db();
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
