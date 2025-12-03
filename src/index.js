import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(() => {
    console.log("Database connected 🌱");
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });







// this is fot the biggner or Intern 
/*
import express from "express";

const app = express()


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    {
      DB_NAME;
    }
    app.on("error", () => {
      console.log("ERROR:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listeing in port 
                ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
})();
*/