import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./page/Account";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
