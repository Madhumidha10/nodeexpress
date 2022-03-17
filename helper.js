import { client } from './index.js';
import express from 'express';
export async function deleteMovieById(id) {
  return await client.db("b30wd").collection("movies").deleteOne({ id: id });
}
export async function updateMovieByID(id, data) {
  return await client.db("b30wd").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function deleteAllMovie() {
  return await client.db("b30wd").collection("movies").deleteMany({});
}
export async function insertAllMovie(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}
export async function getMovieByID(id) {
  return await client.db("b30wd").collection("movies").findOne({ id: id });
}
export async function getAllMovie() {
  return await client
    .db("b30wd")
    .collection("movies")
    .find({})
    .toArray();
}
