import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Sobre from "./Pages/Sobre";
import Pitstop from "./Pages/Pitstop";

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
    path: "/Pitstop",
    element: <Pitstop/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
])


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
