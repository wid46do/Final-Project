import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../style/style.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Camera from '../images/fi_camera.png';
import { HiArrowLeft } from 'react-icons/hi'; 

export default function Formprofil(){
    const [ isToggled, useIstoggled ] = useState(false);
    const uploadedImage =useRef(null);
    const imageUploader =useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div className="container my-3 my-md-5 my-lg-5">
            <div className="arrow my-3 my-md-0 my-lg-0 d-flex">
                <HiArrowLeft/>
                <p className='ms-5 mb-0 d-md-none d-lg-none fw-bold'>Lengkapi Info Akun</p>
            </div>
            <div className='d-flex justify-content-center'>
                <Form className='profil-form'>
                    <div className='d-flex justify-content-center'>
                        <Form.Group>
                            <Form.Control
                                type='file'
                                className='d-none' 
                                onChange={handleImageUpload} 
                                ref={imageUploader}
                                accept='image/*' 
                            />
                            <div 
                                onClick={() => imageUploader.current.click()}
                            >
                                {uploadedImage ? (
                                    <div className={ "input-dropzone d-flex justify-content-center align-items-center" }>
                                        <img 
                                            ref={uploadedImage}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "50%"
                                            }} 
                                        />
                                    </div>
                                ) : (
                                    <div className={ "input-dropzone d-flex justify-content-center align-items-center" }>
                                        <img 
                                            src={Camera}
                                        />
                                    </div> 
                                )}
                            </div>
                        </Form.Group>
                    </div>
                    <Form.Group>
                        <Form.Label>Nama*</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Nama'
                            className='form-input'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Kota*</Form.Label>
                        <Form.Select className='form-input'>
                            <option text='secondary'>Pilih Kota</option>
                            <option>Surabaya</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Alamat*</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder='Contoh: Jalan Ikan Hiu 33'
                            className='form-input'
                        />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>No Handphone*</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='contoh: +628123456789'
                            className='form-input'
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