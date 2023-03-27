import "./App.css";
import AddUserComponent from "./components/AddUserComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUserComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/home/:id" element={<HomeComponent />}></Route>
        {/* <Route path="/books" element={<BookListComponent />}></Route>
        <Route path="/add-book/:id" element={<AddBookComponent />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
