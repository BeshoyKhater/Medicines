import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/public-layout";
import Account from "./page/Account";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PublicLayout />}>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          </Route>
          <Route element={<PublicLayout />}>
            <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
