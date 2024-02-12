import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";
import { AllProductsDataAndSavedCartData } from "./Loaders/allProducts&SavedCartData.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        loader: AllProductsDataAndSavedCartData,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: AllProductsDataAndSavedCartData,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
