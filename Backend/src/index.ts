import { UserModel } from './models/user.model';
import express from "express";
// import mysql from "mysql";
// import mongodb from "mongodb";
import * as mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Dictionary } from "./dictionary";
// import { Credentials } from './../../../Common/contracts/credentials';
import { Credentials } from './../../Common/contracts/credentials';
import { ObjectId } from 'mongodb';


const hashedPassword = "9f01b4bc5b32af8161d79b1363c7e012";

const dataBasePort = 27017;
const dataBaseName = "ExampleShopApplicationDataBase";

const serverPort = 8080;
const app = express();

const bc = bcrypt;

const salt = 10;

const x: Credentials = {
  login: "abc",
  password: "xyz"
}

app.use(express.json());

// Start server

app.listen(serverPort, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${serverPort}`);
});

// Routing

app.get("/", (req: any, res) => {
  // tslint:disable-next-line:no-console
  console.log("HELLO")
  res.send('Hello');
});


app.post("/insertNewUser", (req, res) => {
  // tslint:disable-next-line:no-console
  console.log("ASD");
  // insertNewUser("ABC", "CDB");
  res.send("Henlo");
});

app.get("/test", (req, res) => {
  // console.log("ZXC");
  res.send("ZXC")
});


// Functions

// function validateCredentials(login: string, password: string) {
// const hashedLogin = bcrypt.hash(login, salt);
// const hashedPassword = bcrypt.hash(password, salt);
// hashowanie loginu i hasla oraz strzał do bazy i zwrocene id klieta
// brak id, powrot do klienta, nie wysylac dodatkowych informacji (powód, klienta moze strzelać do backednu co kilka sekund i co kilka sekund bedziemy wysylac aktualna konfiguracje)
// jest id to pobieramy info o klienie z bazy i wysylamy na front
// }

function insertNewUser(login: string, password: string) {
  // tslint:disable-next-line:no-console
  console.log("QWE")
  bcrypt.hash(new Date() + login, salt).then((hash) => {
    UserModel.collection.insertOne({
      _id: new ObjectId(hash),
      hashedLogin: bcrypt.hash(login, salt),
      hashedPassword: bcrypt.hash(password, salt)
    }).catch((err) => {
      console.log(err);
    });
  });
}

// npm run start
// https://en.it1352.com/article/377cb1a815894df69e8143a45246ce0f.html