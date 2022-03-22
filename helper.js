import { client } from './index.js';
import { ObjectId } from 'mongodb';
import express from 'express';
export async function deleteMovieById(id) {
  return await client.db("b30wd").collection("movies").deleteOne({_id: ObjectId(id)});
}
export async function updateMovieByID(id, data) {
  return await client.db("b30wd").collection("movies").updateOne({_id: ObjectId(id)}, { $set: data });
}
export async function deleteAllMovie() {
  return await client.db("b30wd").collection("movies").deleteMany({});
}

export async function insertAllMovie(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

export async function getMovieByID(id) {
  return await client.db("b30wd").collection("movies").findOne({ _id: ObjectId(id)});
}
export async function getUserByName(username) {
return await client.db("b30wd").collection("users").findOne({ username:username})
}

export async function getAllMovie() {
  return await client
    .db("b30wd")
    .collection("movies")
    .find({})
    .toArray();
}
export async function insertUsers(data){
  return await client
    .db("b30wd")
    .collection("users")
  .insertOne(data)
}