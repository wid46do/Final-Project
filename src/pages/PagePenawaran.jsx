import React, { useState, useEffect } from "react";
import ContentPageProduct from "../components/ContentPageProduct";
import NavbarSeller from "../components/NavbarSeller";

function PagePenawaran() {
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
      <ContentPageProduct changeWidth={width} />
    </>
  );
}

export default PagePenawaran;
