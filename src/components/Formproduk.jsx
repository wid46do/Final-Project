import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../style/style.css';
import Plus from '../images/fi_plus.png';
import { HiArrowLeft } from 'react-icons/hi';

export default function Formproduk(){
    return(
        <div className="container my-3 my-md-5 my-lg-5">
            <div className="arrow my-4 my-md-0 my-lg-0 d-flex">
                <HiArrowLeft/>
                <p className='ms-4 mb-0 d-md-none d-lg-none fw-bold'>Lengkapi Detail Produk</p>
            </div>
            <div className='d-flex justify-content-center'>
                <Form className='profil-form'>
                    <Form.Group>
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nama Produk'
                            className='form-input'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Harga Produk</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Rp 0,00'
                            className='form-input'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Kategori</Form.Label>
                        <Form.Select className='form-input'>
                            <option>Pilih Kategori</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder='Contoh: Jalan Ikan Hiu 33'
                            className='form-input'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Foto Produk</Form.Label>
                        <div>
                            <div className="produk-dropzone d-flex justify-content-center align-items-center">
                                <img src={Plus} alt="" />
                            </div>
                        </div>
                    </Form.Group>
                    <div className='mt-3 row'>
                        <div className="porduk-btn d-grid col-6">
                            <Button className='form-button2 bg-light button-border text-dark'>
                                Preview
                            </Button>
                        </div>
                        <div className="porduk-btn d-grid col-6">
                            <Button className='form-button'>
                                Terbitakan
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}