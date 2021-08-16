// import express, { static } from "express";
// import { urlencoded } from "body-parser";
// import cors from "cors";
// import mongoose from "mongoose";
// import { resolve } from "path";

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
// app.use(urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 5000;
const uri = "mongodb+srv://YANA:72877287@realmcluster.lwtcs.mongodb.net/AppointeeDB?retryWrites=true&w=majority";


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("database connect");
  });


if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
