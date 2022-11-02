import React from "react";
import { viewBook } from "../store/reducer/booksSlice";

export default function BookItem({ book,deleteBook, dispatch  }) {
  return (
    <div className="bg-light rounded text-dark p-2 mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2>{book.title}</h2>
          </div>
          <div className="col-md-7">
            <button className="btn btn-success mx-3"  onClick={() => dispatch(viewBook(book.id))}>View Book</button>
            <button className="btn btn-danger"  onClick={() => dispatch(deleteBook(book.id))}>Delete Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}
