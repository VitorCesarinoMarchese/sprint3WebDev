import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Sobre from "./Pages/Sobre";
import Pitstop from "./Pages/Pitstop";
import HomeSport from "./Pages/HomeSport";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Sobre/:sport",
    element: <Sobre/>
  },
  {
    path: "/home/:sport",
    element: <HomeSport/>
  },  
  {
    path: "/Pitstop/:sport",
    element: <Pitstop/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
])


function App() {
  return (
    <div className={"min-h-screen flex flex-col text-white "}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
