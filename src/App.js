import { Routes, Route } from "react-router-dom";
import { BooksList } from "./components/BooksList/BooksList";
import { CreateBook } from "./components/CreateBook/CreateBook";
import { UpdateBook } from "./components/UpdateBook/UpdateBook";
import { NavBar } from "./components/shared/NavBar";
function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/update-book" element={<UpdateBook />} />
          <Route path="/create-book" element={<BooksList />} />
          <Route path="/" element={<CreateBook />} />
        </Routes>
    </>
  );
}

export default App;
