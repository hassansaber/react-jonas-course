import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

function App() {
  const router = createBrowserRouter([
    {
      // Layout route : routeObj  without path
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "cart", element: <Cart /> },
        {
          path: "order/new",
          element: <CreateOrder />,
          action: createOrderAction,
          errorElement: <Error />,
        },
        {
          path: "order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
        {
          path: "menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

//Done
// Tailwind
