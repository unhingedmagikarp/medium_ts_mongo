import { Request, Response } from "express";
import Book from "../models/book";

export const allBooks = (req: Request, res: Response) => {
  const books = Book.find((err: any, books: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(books);
    }
  });
};

export const showBook = (req: Request, res: Response) => {
  const book = Book.findById(req.params.id, (err: any, book: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
};

export const addBook = (req: Request, res: Response) => {
  const book = new Book(req.body);
  book.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
};

export const updateBook = (req: Request, res: Response) => {
  let book = Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, book: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(book);
      }
    }
  );
};

export const deleteBook = (req: Request, res: Response) => {
  const book = Book.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Book deleted from database");
    }
  });
};
