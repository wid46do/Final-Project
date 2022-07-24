import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "../style/style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Camera from "../images/fi_camera.png";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../actions/profile";
import axios from "axios";

export default function Formprofil() {
  const token = JSON.parse(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataProfile } = useSelector((state) => state.profile);
  const [uploadedImage, setUploadedImage] = useState(false);
  const imageUploader = useRef(null);

  const user_id = JSON.parse(localStorage.getItem("userId"));

  const [avatar, setAvatar] = useState(null);
  const [fullname, setFullname] = useState();
  const [noTelp, setNoTelp] = useState();
  const [city, setCity] = useState();
  const [alamat, setAlamat] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (dataProfile === false) {
      dispatch(getProfile(user_id));
      return;
    }
    setAvatar(dataProfile.fotoProfile);
    setFullname(dataProfile.full_name);
    setNoTelp(dataProfile.no_telp);
    setCity(dataProfile.kota);
    setAlamat(dataProfile.alamat);
  }, [dataProfile]);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    setAvatar(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("user_Id", user_id);
    formData.append("full_name", fullname);
    formData.append("kota", city);
    formData.append("alamat", alamat);
    formData.append("no_telp", noTelp);
    formData.append("fotoProfile", avatar);

    for (const value of formData.values()) {
      console.log({ value });
    }

    // dispatch(updateProfile(formData, navigate));
    // axios
    //   .put("https://secondhand6.herokuapp.com/user/update/12", formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios
    //   .put("https://secondhand6.herokuapp.com/user/update/12", {
    //     data: formData,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Basic ${token}`,
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios({
      method: "post",
      url: `https://secondhand6.herokuapp.com/user/update/{user_Id}?user_Id=${user_id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  console.log(dataProfile);

  return (
    <>
      {dataProfile === false ? (
        <p className="fw-bold mt-3 ms-3">Loading...</p>
      ) : (
        <div className="container my-3 my-md-5 my-lg-5">
          <div className="arrow my-3 my-md-0 my-lg-0 d-flex">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="border-0 bg-white"
            >
              <HiArrowLeft />
            </button>
            <p className="ms-5 mb-0 d-md-none d-lg-none fw-bold">
              Lengkapi Info Akun
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Form className="profil-form" onSubmit={handleUpdateProfile}>
              <div className="d-flex justify-content-center">
                <Form.Group>
                  <Form.Control
                    type="file"
                    className="d-none"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    accept="image/*"
                  />
                  <div onClick={() => imageUploader.current.click()}>
                    <div
                      className={`input-dropzone ${
                        uploadedImage && "bg-transparent"
                      } d-flex justify-content-center align-items-center`}
                    >
                      <img
                        src={
                          avatar === null
                            ? uploadedImage || Camera
                            : uploadedImage || avatar
                        }
                        style={
                          uploadedImage || avatar
                            ? {
                                width: "100%",
                                height: "100%",
                                objectFit: "fill",
                              }
                            : {}
                        }
                      />
                    </div>
                  </div>
                </Form.Group>
              </div>

              <Form.Group>
                <Form.Label>Nama Lengkap*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap"
                  className="form-input"
                  value={fullname || ""}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>No Handphone*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="contoh: +628123456789"
                  className="form-input"
                  value={noTelp || ""}
                  onChange={(e) => {
                    setNoTelp(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Kota*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Kota"
                  className="form-input"
                  value={city || ""}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Alamat*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                  className="form-input"
                  value={alamat || ""}
                  onChange={(e) => {
                    setAlamat(e.target.value);
                  }}
                />
              </Form.Group>

              <div className="mt-3 d-grid">
                <Button className="form-button" type="submit">
                  Simpan
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
