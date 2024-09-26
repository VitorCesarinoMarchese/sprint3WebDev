import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Sobre from "./Pages/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Sobre",
    element: <Sobre/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
