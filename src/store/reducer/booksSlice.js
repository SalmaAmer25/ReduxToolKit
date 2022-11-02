import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialState = {
  books: [],
  isLoading: false,
  error: null,

};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:3005/books");
      console.log("Response Data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "books/addBook",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post("http://localhost:3005/books", book);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const viewBook = createAsyncThunk(
  "books/viewBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`http://localhost:3005/books/${id}`);
      console.log(response.data);
      const navigate = useNavigate();
      navigate("http://localhost:3005/books")
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`http://localhost:3005/books/${id}`);
      console.log("Response Data", response);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //------------------ ADD Book
    [addBook.pending]: () => {},
    [addBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
    },
    [addBook.rejected]: () => {},
  },
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;
