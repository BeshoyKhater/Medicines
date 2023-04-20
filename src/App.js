import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/public-layout";
import Account from "./page/Account";
import Home from "./page/Home";
import Login from "./page/Login";
import { ViewProduct } from "./page/Product/ViewProduct";
import Register from "./page/Register";
import { QueryClientProvider,QueryClient } from "react-query"

function App(id) {
  const queryClient=new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PublicLayout secret />}>
              <Route path="/" element={ <Home />} />
            </Route>
            <Route element={<PublicLayout secret />}>
              <Route path="product/:productId" element={ <ViewProduct />} />
            </Route>
            <Route element={<PublicLayout secret/>}>
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
