import { config } from "dotenv";
import express from "express";
//Para poder acceder a las variables del ambiente (.env)
config();
const app = express();
console.log("hola");
app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
