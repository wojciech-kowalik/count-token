const { encode } = require("gpt-3-encoder");

// exports.handler = async (event, context) => {
//   if (event.httpMethod === "POST") {
//     try {
//       const payload = JSON.parse(event.body);
//       const text = payload.text;
//       return {
//         statusCode: 200,
//         body: JSON.stringify({
//           tokens: encode(text).length,
//         }),
//       };
//     } catch (error) {
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: error.message }),
//       };
//     }
//   } else {
//     return {
//       statusCode: 501,
//       body: JSON.stringify({ message: "Not Implemented" }),
//       headers: { "content-type": "application/json" },
//     };
//   }
// };

"use strict";
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
const { encode } = require("gpt-3-encoder");

const router = express.Router();

router.post("/", (request, response) => {
 const payload = JSON.parse(request.body);
 const text = payload.text;

 return response.json({
   body: JSON.stringify({
     tokens: encode(text).length,
   }),
 });
})

app.use(bodyParser.json());
app.use("/.netlify/functions/count", router);

exports = app;
exports.handler = serverless(app);
