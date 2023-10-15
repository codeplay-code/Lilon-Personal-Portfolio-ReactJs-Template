import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { headerData } from '../../data.json';
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import CustomCursor from "../CustomCursor/CustomCursor";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> : (
        <>
          <CustomCursor />
          <Header data={headerData} />
          <Outlet />
        </>
      )}
    </>
  )
}

export default Layout;
