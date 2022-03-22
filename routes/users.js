 import {insertUsers,getUserByName} from '../helper.js';
 import express from "express";
const router=express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

router.post("/signup", async function (request, response) {
  const { username, password } = request.body;
  const hashPassword = await genPassword(password);
  const newUser = {
    username: username,
    password: hashPassword,
  };
  const result = await insertUsers(newUser);
  response.send(result);
});
router.post("/login", async function (request, response) {
  const { username, password } = request.body;
  // db.users.findOne({username: "tamil"})
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);

  if (!userFromDB) {
    response.status(401).send({ message: "Invalid credentials" });
  } else {
    const storedPassword = userFromDB.password; // hashed password
    const isPasswordMatch = await bcrypt.compare(password, storedPassword);

    console.log("isPasswordMatch", isPasswordMatch);
    if (isPasswordMatch) {
      const token=jwt.sign({id:userFromDB._id},process.env.SECRETKEY);
      response.send({ message: "Successfull login",token:token });
    } else {
      response.status(401).send({ message: "Invalid credentials" });
    }
  }
});

async function genPassword(password)
{
const salt=await bcrypt.genSalt(10);
const hashpwd=await bcrypt.hash(password,salt);
console.log({salt,hashpwd})
return hashpwd;
}




export const usersRouter = router;