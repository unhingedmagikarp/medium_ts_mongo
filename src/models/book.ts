import mongoose, { Schema, Document } from "mongoose";

export interface BookInterface extends Document {
  title: string;
  author: string;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

const Book = mongoose.model<BookInterface>("Book", BookSchema);
export default Book;
