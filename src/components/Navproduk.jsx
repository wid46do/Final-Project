import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import '../style/style.css';
import Logo from '../images/Rectangle-127.png';

export default function Navproduk(){
    return(
        <Navbar expand="lg" variant="light" bg="body" className='shadow d-none d-md-block'>
            <Container>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}