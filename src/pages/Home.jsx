import Navhomedefault from "../components/Navhomedefault";
import Homemain from "../components/Homemain";
import Navhomelogged from "../components/Navhomelogged";
import { useSelector } from "react-redux";

export default function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      {isLoggedIn ? <Navhomelogged /> : <Navhomedefault />}
      <Homemain />
    </>
  );
}
