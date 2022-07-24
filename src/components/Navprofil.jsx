import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import "../style/style.css";

export default function Navprofil() {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="body"
      className="shadow d-none d-md-block"
    >
      <Container>
        <Navbar.Brand>
          <img
            src="/images/Rectangle-127.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            <p className="text-dark mb-0 fw-bold">Lengkapi Info Akun</p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
