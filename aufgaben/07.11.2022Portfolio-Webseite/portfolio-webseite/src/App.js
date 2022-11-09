import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <BrowserRouter>
        <header>
          <Link to="/">Main</Link>&nbsp;|&nbsp;
          <Link to="/products">Products</Link>
        </header>

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Main />} />
        </Routes>

        <footer>
          Footer
        </footer>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
