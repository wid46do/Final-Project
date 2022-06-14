import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../style/style.css';
import Camera from '../images/fi_camera.png';
import Arrow from '../images/fi_arrow-left.png'; 

export default function Formprofil(){
    return(
        <div className="container my-3 my-md-5 my-lg-5">
            <div className="arrow my-3 my-md-0 my-lg-0 d-flex">
                <img src={Arrow} alt="" />
                <p className='ms-5 mb-0 d-md-none d-lg-none fw-bold'>Lengkapi Info Akun</p>
            </div>
            <div className='d-flex justify-content-center'>
                <Form className='profil-form'>
                    <div className='d-flex justify-content-center'>
                        <div className="input-dropzone d-flex justify-content-center align-items-center">
                            <img src={Camera} alt="" />
                        </div>
                    </div>
                    <Form.Group>
                        <Form.Label>Nama*</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nama'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Kota*</Form.Label>
                        <Form.Select>
                            <option text='secondary'>Pilih Kota</option>
                            <option>Surabaya</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Alamat*</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder='Contoh: Jalan Ikan Hiu 33'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>No Handphone*</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='contoh: +628123456789'
                        />
                    </Form.Group>
                    <div className='mt-3 d-grid'>
                        <Button className='form-button'>
                            Simpan
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}