import { Outlet } from "react-router-dom";
import { Nav } from "../components";

const MainLayout = () => {
  return (
    <>
        <Nav />
        <Outlet />
    </>
  )
}

export default MainLayout;