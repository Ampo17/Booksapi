import express, { json } from "express";

import booksRouters from "./routers/booksRouters.js";

const app = express();

app.use(express.json());
app.use("/books", booksRouters);


app.listen(3000, () => {
  console.log("Mükszik");
});
