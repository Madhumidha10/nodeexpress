import express from 'express';
import cors from "cors";
export const app = express()
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
 import { moviesRouter } from "./routes/movies.js";
 import { usersRouter } from "./routes/users.js";


dotenv.config()
// const Mongo_URL="mongodb://localhost"
const Mongo_URL=process.env.Mongo_URL
const PORT=process.env.PORT
//middle_ware->intercept ->converting 
app.use(express.json());

app.use(cors());
app.use("/movies", moviesRouter);
app.use("/users", usersRouter);
app.listen(PORT,()=>console.log("server started"));
const mobiles = [
  {
    model: "OnePlus 9 5G",
    img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    company: "Oneplus",
  },
  {
    model: "Iphone 13 mini",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
    company: "Apple",
  },
  {
    model: "Samsung s21 ultra",
    img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
    company: "Samsung",
  },
  {
    model: "xiomi mi 11",
    img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
    company: "xiomi",
  },
];

app.get("/mobiles", async function (request, response) {
  // db.movies.find({})
  // const movies = await getAllMovies();
  response.send(mobiles);
});

async function createConnection()
{
  const client=new MongoClient(Mongo_URL);
  await client.connect()
  console.log("mongo is connected")
  return client;
}



export const client = await createConnection();

