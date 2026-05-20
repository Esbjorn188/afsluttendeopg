import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Energipriser from "./pages/Energipriser"
import Fritvalg from "./pages/Fritvalg"
import Nyheder from "./pages/Nyheder"
import Vejrudsigten from "./pages/Vejrudsigten"
import ViborgHaveservice1 from "./pages/ViborgHaveservice1"
import ViborgHaveservice2 from "./pages/ViborgHaveservice2"
import NotFound from "./pages/NotFound";



//ADMIN
import ViborgHaveservice1Admin from "./pages/admin/ViborgHaveservice1/ViborgHaveservice1Admin";
import ViborgHaveservice1Delete from "./pages/admin/ViborgHaveservice1/ViborgHaveservice1Delete";
import ViborgHaveservice1Create from "./pages/admin/ViborgHaveservice1/ViborgHaveservice1Create";
import ViborgHaveservice1Edit from "./pages/admin/ViborgHaveservice1/ViborgHaveservice1Edit";
import LayoutAdmin from "./layout/admin/LayoutAdmin"
import HomeAdmin from "./pages/admin/HomeAdmin";
import ViborgHaveservice1Put from "./pages/admin/ViborgHaveservice1/ViborgHaveservice1Put";
import ViborgHaveservice1PutEdit from "./pages/admin/ViborgHaveservice1/ViborgHaveservice1PutEdit";



const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home /> },
      { path: "/Energipriser", element: <Energipriser /> },
      { path: "/Fritvalg", element: <Fritvalg /> },
      { path: "/Nyheder", element: <Nyheder /> },
      { path: "/Vejrudsigten", element: <Vejrudsigten /> },
      { path: "/ViborgHaveservice1", element: <ViborgHaveservice1 /> },
      { path: "/ViborgHaveservice2", element: <ViborgHaveservice2 /> },
      { path: "*", element: <NotFound /> },
    ]
  },
  {
    path: "/admin",
    element: <LayoutAdmin/>,
    children: [
      { index: true, element: <HomeAdmin/> },
      { path: "ViborgHaveservice1Admin", element: <ViborgHaveservice1Admin/> },
      { path: "ViborgHaveservice1AdminDelete", element: <ViborgHaveservice1Delete/> },
      { path: "ViborgHaveservice1AdminCreate", element: <ViborgHaveservice1Create/> },
      { path: "ViborgHaveservice1AdminEdit/:id", element: <ViborgHaveservice1Edit/> },
      { path: "ViborgHaveservice1AdminPut", element: <ViborgHaveservice1Put/> },
      { path: "ViborgHaveservice1AdminPutEdit/:id", element: <ViborgHaveservice1PutEdit/> },
    ]
  }
])


function App() {

  return <RouterProvider router={router} />;

}

export default App