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
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
export default function Formproduk() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [inputProduk, setInputProduk] = useState({
    product_name: "",
    product_harga: 0,
    category_id: 0,
    product_deskripsi: "",
    statusProduct: "DIJUAL",
    user_Id: 0,
    product_lokasi: "",
  });
  console.log(images);
  console.log(selectedImages);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setImages((previousImages) => [...previousImages, event.target.files[0]]);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "12px",
    }),
  };

  const onChangeHandler = (key, value) => {
    if (key === "category_id") {
      inputProduk[key] = value.value;
    } else {
      inputProduk[key] = value;
    }
    setInputProduk({ ...inputProduk });
  };

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

  useEffect(() => {
    if (selectedImages.length > 3) {
      Swal.fire("Sorry", "Maksimal Upload 3 Gambar Yaa", "error");
    }
  }, [selectedImages]);

  const navigate = useNavigate();

  const idUser = JSON.parse(localStorage.getItem("userId"));

  const upload = async (id) => {
    try {
      let formData = new FormData();

      Object.keys(inputProduk).forEach((key) => {
        if (id === "preview") {
          inputProduk.statusProduct = "TERJUAL";
        } else if (key === "user_Id") {
          inputProduk.user_Id = idUser;
        }
        setInputProduk({ ...inputProduk });
        formData.append(key, inputProduk[key]);
      });

      images.forEach((imageFile) => {
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
      navigate("/daftar-jual");
      return res.data;
    } catch (error) {
      Swal.fire("Sorry", "Update add produk gagal", "error");
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
            <Form.Label data-testid="formLabel">Nama Produk</Form.Label>
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
            <div className="images">
              <div className="grid">
                <label className="image-uploader">
                  <FiPlus />
                  <input
                    className="input-image"
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    accept="image/png, image/jpeg, image/webp"
                  />
                </label>
              </div>
              {selectedImages &&
                selectedImages.map((image, index) => {
                  return (
                    <div key={index} className="grid">
                      <div className="image">
                        <img id="img" src={image} alt="upload" />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image)
                            );
                            setImages(images.filter((value, f) => f !== index));
                          }}
                        >
                          <FiX /> Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Form.Group>

          <div className="mt-3 row">
            <div className="porduk-btn d-grid col-6">
              <Button
                className="form-button2 bg-light button-border text-dark"
                // onClick={()=>upload("preview")}
              >
                Preview
              </Button>
            </div>
            <div className="porduk-btn d-grid col-6">
              <Button className="form-button" onClick={() => upload("dijual")}>
                Terbitkan
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
