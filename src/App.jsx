import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/product",
      element: <Product/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )

};

export default App;