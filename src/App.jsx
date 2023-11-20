import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Error, Login, Register, ErrorItem,Meals } from "./pages";
import {Categories, Types} from "./components";

import {loader as mealsLoader} from "./pages/Meals";
// import {loader as categoryLoader} from "./pages/Category";
// import {loader as homeLoader} from "./pages/home/Home";
// import {loader as historyLoader} from "./pages/history/History"

import {action as registerAction} from "./pages/Register";
 import {action as loginAction} from "./pages/Login"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    errorElement:<Error />,
    // loader: homeLoader,
    children: [
      {
        index: true,
        element:<Meals />,
        errorElement: <ErrorItem />,
        loader: mealsLoader,
      },
      {
        path: "/categories/:id",
        element: <Categories />,
        errorElement: <ErrorItem />, 
        // loader: categoriesLoader,
     },
     {
     path:"/types/:id",
     element:<Types />,
     errorElement:<ErrorItem />,
     
     }
    ]
  }, 
  {
    path:"/login",
    element:<Login />,
    errorElement:<Error />,
    action: loginAction
  },
  {
    path:"/register",
    element:<Register />,
    errorElement:<Error />,
    action: registerAction,
  }, 
  {
    path:"/profile",
    // element:<Profile />,
    errorElement:<Error />
  },
  {
    path:"/orders",
    // element:<History />,
    errorElement:<Error />,
    // loader: historyLoader,
  },
  {
    path:"/settings",
    // element:<Settings />,
    errorElement:<Error />
  },
]);

const App = () => {
  return (
  <RouterProvider  router={router} />
  );
};
export default App;