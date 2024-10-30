import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Sobre from "./Pages/Sobre";
import Pitstop from "./Pages/Pitstop";
import HomeSport from "./Pages/HomeSport";
const sports = [{nome: "formulaE"}, {nome: "escalada"}]
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
    path: "/Sobre_formulaE",
    element: <Sobre/>
  },
  {
    path: "home_formulaE",
    element: <HomeSport  sport={sports[0]}/>
  },  
  {
    path: "home_escalada",
    element: <HomeSport  sport={sports[1]}/>
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#4e0b0b] to-black text-white">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
