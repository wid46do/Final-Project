import React, { useEffect, useState } from "react";
import ContentSaleList from "../components/ContentSaleList";
import Navhomelogged from "../components/Navhomelogged";
import SidebarMobile from "../components/SidebarMobile";

function PageSaleList() {
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const changeSidebar = () => {
    setSidebarMobile(!sidebarMobile);
  };

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (sidebarMobile === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarMobile]);

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);

  return (
    <>
      <Navhomelogged />
      <SidebarMobile visible={sidebarMobile} setVisible={changeSidebar} />
      <ContentSaleList changeWidth={width} setVisible={changeSidebar} />
    </>
  );
}

export default PageSaleList;
