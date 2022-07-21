import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "../style/style.css";
import Plus from "../images/fi_plus.png";
import { HiArrowLeft } from "react-icons/hi";
import { useDropzone } from "react-dropzone";
import Select from "react-select";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Formproduk() {
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [options, setOptions] = useState([]);
  const [inputProduk, setInputProduk] = useState({
    product_name: "",
    product_harga: 0,
    category_id: 0,
    product_deskripsi: "",
    statusProduct: "DIJUAL",
    user_id: 12,
    product_lokasi: "surabaya",
  });

  const selectFile = (event) => {
    const reader = new FileReader();
    console.log(event.constructor.name);
    reader.addEventListener("load", () => {
      setImagePreview((before) => {
        const next = [...before];
        next.push(reader.result);
        return next;
      });
    });

    if (event && imagePreview.length < 4) {
      reader.readAsDataURL(
        event.constructor.name === "SyntheticBaseEvent"
          ? event.target.files[0]
          : event
      );
      setImageFiles([
        ...imageFiles,
        event.constructor.name === "SyntheticBaseEvent"
          ? event.target.files[0]
          : event,
      ]);
    }
  };

  const onDrop = (acceptedFiles) => {
    selectFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ["image/*"],
  });

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "12px",
    }),
  };

  const onChangeHandler = (key, value) => {
    console.log(key);
    if (key === "category_id") {
      inputProduk[key] = value.value;
    } else {
      inputProduk[key] = value;
    }
    setInputProduk({ ...inputProduk });
  };
  console.log(inputProduk);

  useEffect(() => {
    const getCategory = async () => {
      const respon = await axios.get(
        "https://secondhand6.herokuapp.com/category/getAll"
      );
      setOptions(
        respon.data.map((category) => {
          return {
            value: category.category_id,
            label: category.category_name,
          };
        })
      );
    };
    getCategory();
  }, []);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      let formData = new FormData();
      console.log(inputProduk);

      Object.keys(inputProduk).forEach((key) => {
        formData.append(key, inputProduk[key]);
      });

      console.log(imageFiles);
      imageFiles.forEach((imageFile) => {
        formData.append("product_gambar", imageFile);
      });

      const res = await axios.post(
        "https://secondhand6.herokuapp.com/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data;
    } catch (error) {
      alert("upload failed");
    }
  };

  return (
    <div className="container my-3 my-md-5 my-lg-5">
      <div className="arrow my-4 my-md-0 my-lg-0 d-flex">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="border-0 bg-white"
        >
          <HiArrowLeft />
        </button>
        <p className="ms-4 mb-0 d-md-none d-lg-none fw-bold">
          Lengkapi Detail Produk
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <Form className="profil-form" onSubmit={(e) => e.preventDefault()}>
          <Form.Group>
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nama Produk"
              className="form-input"
              onChange={(e) => {
                onChangeHandler("product_name", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control
              type="text"
              inputMode="numeric"
              placeholder="Rp 0,00"
              className="form-input"
              onChange={(e) => {
                onChangeHandler("product_harga", parseInt(e.target.value) || 0);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Kategori</Form.Label>
            <Select
              styles={customStyles}
              options={options}
              // isMulti
              onChange={(e) => {
                onChangeHandler("category_id", e);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Lokasi</Form.Label>
            <Form.Control
              type="text"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              className="form-input"
              onChange={(e) => {
                onChangeHandler("product_lokasi", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Deskripsi produk"
              className="form-input"
              onChange={(e) => {
                onChangeHandler("product_deskripsi", e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Foto Produk</Form.Label>
            <div className="row px-3">
              <div
                {...getRootProps()}
                className="produk-dropzone d-flex justify-content-center align-items-center col-6 col-md-12 col-lg-12 p-0"
              >
                <input {...getInputProps()} onChange={selectFile} />
                <img src={Plus} alt="" />
              </div>

              {imagePreview &&
                imagePreview.map((image) => {
                  return (
                    <div
                      key={image}
                      className="preview col-6 col-md-12 col-lg-12 p-0 ms-4"
                    >
                      <img
                        src={image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                          borderRadius: "12%",
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </Form.Group>

          <div className="mt-3 row">
            <div className="porduk-btn d-grid col-6">
              <Button className="form-button2 bg-light button-border text-dark">
                Preview
              </Button>
            </div>
            <div className="porduk-btn d-grid col-6">
              <Button className="form-button" onClick={upload}>
                Terbitkan
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}