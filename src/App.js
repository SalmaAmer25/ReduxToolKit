import './App.css';
import Counter from "./component/Counter";
import { Route, Routes } from "react-router-dom";
import Books from "./component/Books";
import MyNav from './component/MyNav';
import BookForm from "./component/BookForm";

function App() {
  return (
    <div className="App">
      <MyNav/>
    <Routes>
      <Route path="/" element={<Books />}/>
      <Route path="add" element={<BookForm />} />
    </Routes>
     <Counter/>
    </div>
  );
}

export default App;
