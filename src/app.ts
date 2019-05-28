import express, { Application } from "express";
import bodyParser from "body-parser";

import connect from "./connect";
import { db } from "./config/config";
import * as BookController from "./controllers/book_controller";

const app: Application = express();
const port: number = 5000 || process.env.PORT;

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/books", BookController.allBooks);

app.get("/books/:id", BookController.showBook);

app.post("/books", BookController.addBook);

app.patch("/books/:id", BookController.updateBook);

app.delete("/books/:id", BookController.deleteBook);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
