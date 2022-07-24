import "bootstrap/dist/css/bootstrap.min.css";
import Listoffer from "../components/Listoffer";
import Navpenawar from "../components/Navpenawar";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router";

export default function Infopenawar() {
  const navigate = useNavigate();
  return (
    <>
      <Navpenawar />
      <div className="container my-3 my-md-5 my-lg-5">
        <div className="arrow my-4 my-md-0 my-lg-0 d-flex">
          <HiArrowLeft onClick={() => navigate(-1)} />
          <p className="page-header mb-0 d-md-none d-lg-none fw-bold">
            Info Penawar
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="offer row mx-1">
            <Listoffer />
          </div>
        </div>
      </div>
    </>
  );
}
