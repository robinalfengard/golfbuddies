import "./App.css";
import AddUserComponent from "./components/AddUserComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUserComponent />}></Route>
        {/* <Route path="/books" element={<BookListComponent />}></Route>
        <Route path="/add-book/:id" element={<AddBookComponent />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
