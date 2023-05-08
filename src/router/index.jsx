import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Clientes } from "../pages/clientes/Clientes";
import { Estudios } from "../pages/estudios/Estudios";
import { Proveedores } from "../pages/proveedores/Proveedores";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/clientes",
    element: <Clientes/>,
  },
  {
    path: "/estudios",
    element: <Estudios/>,
  },
  {
    path: "/proveedores",
    element:<Proveedores/>,


  }
]);
