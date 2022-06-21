import 'bootstrap/dist/css/bootstrap.min.css';
import Listoffer from '../components/Listoffer';
import Navpenawar from '../components/Navpenawar';
import Arrow from '../images/fi_arrow-left.png';

export default function Infopenawar(){
    return(
        <>
            <Navpenawar/>
            <div className="container my-3 my-md-5 my-lg-5">
                <div className="arrow my-4 my-md-0 my-lg-0 d-flex">
                    <img src={Arrow} alt="" />
                    <p className='page-header mb-0 d-md-none d-lg-none fw-bold'>Info Penawar</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='offer row mx-1'>
                        <Listoffer/>
                    </div>
                </div>
            </div>
        </>
    )
}
