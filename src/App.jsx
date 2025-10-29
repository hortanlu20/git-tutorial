import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import "../public/styles/globals.css";
import { ToastContainer } from "react-toastify";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/dashboard";
import ProductPage from "./pages/products";
import ProductPageLayout from "./layouts/ProductPageLayout";
import CategoryPage from "./pages/categories";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter className="">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />}></Route>
          </Route>

          <Route element={<ProductPageLayout />}>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product-category" element={<CategoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
