import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../style/style.css';
import Plus from '../images/fi_plus.png';
import { HiArrowLeft } from 'react-icons/hi';
import { useDropzone } from 'react-dropzone';
import Select from 'react-select';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Formproduk(){
    const [ imagePreview, setImagePreview ] = useState([]);
    const [ options, setOptions ] = useState([])
    const [ inputProduk, setInputProduk ] = useState(
        {
            name: "",
            price: 0,
            category: "",
            description: "",
            status: false
        }
    )

    const selectFile = (event) => {
        const reader = new FileReader();
        console.log(event.constructor.name)
        reader.addEventListener('load', () => {
            setImagePreview((before) =>{
                const next = [...before]
                next.push(reader.result)
                return next;
            });
            
        });
        console.log(event);

        if (event && imagePreview.length < 4) {
            reader.readAsDataURL(event.constructor.name === "SyntheticBaseEvent"? event.target.files[0] : event);
        };
    };

    const onDrop = (acceptedFiles) => {
        selectFile(acceptedFiles[0]);
    }

    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      onDrop,
      accept: [
        'image/*'
      ]
    });

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '12px',
        }),
    }

    const onChangeHandler = (key, value) => {
        inputProduk[key] = value;
        setInputProduk({...inputProduk});
    }
    console.log(inputProduk);

    useEffect(() => {
        const getCategory = async() => {
            const respon = await axios.get('')
            setOptions(respon.data.data.map((category)=>{
                return{
                    value: category.id,
                    label: category.name
                }
            }))
        }
        getCategory()
    }, []);

    const navigate = useNavigate()

    return(
        <div className="container my-3 my-md-5 my-lg-5">
            <div className="arrow my-4 my-md-0 my-lg-0 d-flex">
                <button onClick={() => {navigate(-1)}} className='border-0 bg-white'>
                    <HiArrowLeft/>
                </button>
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
                            onChange={(e)=>{onChangeHandler("name", e.target.value)}}
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label>Harga Produk</Form.Label>
                        <Form.Control
                            type='text'
                            inputMode='numeric'
                            placeholder='Rp 0,00'
                            className='form-input'
                            onChange={(e)=>{onChangeHandler("price", parseInt(e.target.value)||0)}}
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label>Kategori</Form.Label>
                        <Select 
                            styles={customStyles} 
                            options={options} 
                            isMulti
                            onChange={(e)=>{onChangeHandler("category", e)}}
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control
                            as='textarea'
                            placeholder='Contoh: Jalan Ikan Hiu 33'
                            className='form-input'
                            onChange={(e)=>{onChangeHandler("description", e.target.value)}}
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label>Foto Produk</Form.Label>
                        <div className='row px-3'>
                            <div {...getRootProps()} className="produk-dropzone d-flex justify-content-center align-items-center col-6 col-md-12 col-lg-12 p-0">
                                <input {...getInputProps()} onChange={selectFile} />
                                <img src={Plus} alt="" />
                            </div>

                            {imagePreview && (
                                imagePreview.map((image) => {
                                    return(
                                        <div key={image} className='preview col-6 col-md-12 col-lg-12 p-0 ms-4'>
                                            <img
                                                src={image} alt=""
                                                style={ {width: "100%", height: "100%", objectFit: "fill", borderRadius: "12%"} }
                                            />
                                        </div>
                                    )
                                })
                            )}
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
                                Terbitkan
                            </Button>
                        </div>
                    </div>
                    
                </Form>
            </div>
        </div>
    )
}