"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./models/user.model");
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongodb_1 = require("mongodb");
const hashedPassword = "9f01b4bc5b32af8161d79b1363c7e012";
const dataBasePort = 27017;
const dataBaseName = "ExampleShopApplicationDataBase";
const serverPort = 8080;
const app = express_1.default();
const bc = bcrypt_1.default;
const salt = 10;
const x = {
    login: "abc",
    password: "xyz"
};
app.use(express_1.default.json());
// Start server
app.listen(serverPort, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${serverPort}`);
});
// Routing
app.get("/", (req, res) => {
    // tslint:disable-next-line:no-console
    console.log("HELLO");
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
    res.send("ZXC");
});
// Functions
// function validateCredentials(login: string, password: string) {
// const hashedLogin = bcrypt.hash(login, salt);
// const hashedPassword = bcrypt.hash(password, salt);
// hashowanie loginu i hasla oraz strzał do bazy i zwrocene id klieta
// brak id, powrot do klienta, nie wysylac dodatkowych informacji (powód, klienta moze strzelać do backednu co kilka sekund i co kilka sekund bedziemy wysylac aktualna konfiguracje)
// jest id to pobieramy info o klienie z bazy i wysylamy na front
// }
function insertNewUser(login, password) {
    // tslint:disable-next-line:no-console
    console.log("QWE");
    bcrypt_1.default.hash(new Date() + login, salt).then((hash) => {
        user_model_1.UserModel.collection.insertOne({
            _id: new mongodb_1.ObjectId(hash),
            hashedLogin: bcrypt_1.default.hash(login, salt),
            hashedPassword: bcrypt_1.default.hash(password, salt)
        }).catch((err) => {
            console.log(err);
        });
    });
}
// npm run start
// https://en.it1352.com/article/377cb1a815894df69e8143a45246ce0f.html
//# sourceMappingURL=index.js.map