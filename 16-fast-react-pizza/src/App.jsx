import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./UI/Home";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Menu from "./features/menu/Menu";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "cart", element: <Cart /> },
    { path: "order/:orderId", element: <Order /> },
    { path: "order/new", element: <CreateOrder /> },
    { path: "menu", element: <Menu /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
