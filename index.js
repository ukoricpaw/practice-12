const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const ROUTES = {
  GET_DB_NAME: "/db_name",
};

const app = express();

let dbName;

const router = new express.Router();

router.get(ROUTES.GET_DB_NAME, (_, response) => {
  response.json({
    dbName,
  });
});

app.use("/", router);

const client = new MongoClient(process.env.MONGODB_URL);

client.connect().then((mongoClient) => {
  console.log("CONNECTION HAS BEEN ESTABLISHED");
  dbName = mongoClient.options.dbName;
});

app.listen(8080, () => {
  console.log("APPLICATION HAS BEEN STARTED");
});
