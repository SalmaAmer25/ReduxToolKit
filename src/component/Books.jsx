import React, { useEffect } from "react";
import { getBooks } from "../store/reducer/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import BookItem from "./BookItem";
import BookDetails from "./BookDetails";

export default function Books() {
  const { books, isLoading, error } = useSelector((state) => state.booksList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  },[]);

  const bookList = books.length == 0 ? (
      <p className="lead fs-3">No Books To Show</p>) : (
      books.map((book) => {
        return( 
        <BookItem key={book.id} book={book} />
        );
      })
    );
  return (
    <div className="bg-secondary p-5 text-light">
      <h2>Our Books</h2>
      {isLoading && <Loading />}
      {!error && bookList}
      {error && (
        <div className="alert alert-danger">{error} Please Try Again ...</div>
      )}
      <BookDetails />
    </div>
  );
}
