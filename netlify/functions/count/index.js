"use strict";

const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const { encode } = require("gpt-3-encoder");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use("/.netlify/functions/count", router);
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

router.post("/", (request, response) => {
  const text = request.body?.text;

  if (!text) {
    throw Error("No 'text' provided.");
  }

  return response.json({
    tokens: encode(text).length,
  });
});

module.exports = app;
module.exports.handler = serverless(app);
