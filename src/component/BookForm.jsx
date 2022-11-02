import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/reducer/booksSlice";
export default function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    Desc: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(formValues)).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  const operationHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-light p-4 mt-5">
      <div className="container">
        <form action="" onSubmit={submitHandler} onChange={operationHandler}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Book Title"
            name="title"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Book Price"
            name="price"
          />
          <textarea
            name="Desc"
            className="form-control"
            placeholder="Enter Your Decsription"
          ></textarea>

          <button type="submit" className="btn btn-outline-primary mt-5">
            Add New Book
          </button>
        </form>
      </div>
    </div>
  );
}
