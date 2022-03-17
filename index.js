import express from 'express';
import cors from "cors";
export const app = express()
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
 import { moviesRouter } from "./routes/movies.js";

dotenv.config()
// const Mongo_URL="mongodb://localhost"
const Mongo_URL=process.env.Mongo_URL
const PORT=process.env.PORT
app.use(express.json());

app.use(cors());
app.use("/movies", moviesRouter);
app.listen(PORT,()=>console.log("server started"));

async function createConnection()
{
  const client=new MongoClient(Mongo_URL);
  await client.connect()
  console.log("mongo is connected")
  return client;
}
export const client = await createConnection();

