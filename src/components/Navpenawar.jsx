import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import '../style/style.css';
import Logo from '../images/Rectangle-127.png';

export default function Navpenawar(){
    return(
        <Navbar expand="lg" variant="light" bg="body" className='shadow d-none d-md-block'>
            <Container>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        <p className='text-dark mb-0 fw-bold'>Info Penawar</p>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}