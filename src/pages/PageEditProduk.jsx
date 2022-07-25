import React, { useState, useEffect } from "react";
import ContentEditProduct from "../components/ContentEditProduct";
import NavbarSeller from "../components/NavbarSeller";

function PageEditProduk() {
  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);
  return (
    <>
      {width >= 576 && <NavbarSeller />}
      <ContentEditProduct changeWidth={width} />
    </>
  );
}

export default PageEditProduk;
