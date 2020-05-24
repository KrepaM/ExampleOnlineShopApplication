import express from "express";
import mysql from "mysql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Dictionary } from "./dictionary";
// import { Credentials } from './../../../Common/contracts/credentials';
import { Credentials } from './../../Common/contracts/credentials';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Maciej16',
  database: "vin_app",
});

const hashedPassword = "9f01b4bc5b32af8161d79b1363c7e012";

const carsModels = new Dictionary();

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
  res.send('Hello');
});


app.post("/validateCredentials", (req, res) => {

});

// Functions

function validateCredentials(login: string, password: string) {
  // hashowanie loginu i hasla oraz strzał do bazy i zwrocene id klieta
  // brak id, powrot do klienta, nie wysylac dodatkowych informacji (powód, klienta moze strzelać do backednu co kilka sekund i co kilka sekund bedziemy wysylac aktualna konfiguracje)
  // jest id to pobieramy info o klienie z bazy i wysylamy na front
}

// npm run start
// https://en.it1352.com/article/377cb1a815894df69e8143a45246ce0f.html