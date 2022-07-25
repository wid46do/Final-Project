import "../style/riostyle.css";
import { useState, useEffect } from "react";
import Hero from "../images/hero.png";
import { useDispatch, useSelector } from "react-redux";
import { clearRegister, register } from "../actions/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useRef } from "react";

export default function Registeruser() {
  const dispatch = useDispatch();
  const { statusRegister } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [revPassword, unrevPassword] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");

  const togglePassword = () => {
    unrevPassword(!revPassword);
  };

  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearRegister());
    }, 2000);
  }, [statusRegister]);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    form.current.validateAll();

    dispatch(register(fullname, email, password, username))
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch(() => {
        setFullname(fullname);
        setEmail(email);
        setPassword(password);
        setUsername(username);
        setLoading(false);
      });
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  return (
    <>
      <div className="login-page">
        <img src={Hero} className="hero-image" alt="hero" />
        <p className="brand-name">
          Second
          <br />
          Hand.
        </p>
        <div className="login-layout">
          <header className="arrow-back">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </header>
          <div className="login-form">
            <p data-testid="header" className="masuk">
              Daftar
            </p>
            <Form onSubmit={handleRegister} ref={form}>
              <div className="nama">
                <label htmlFor="nama">Nama</label>
                <Input
                  id="nama"
                  name="nama"
                  type="text"
                  value={fullname || ""}
                  placeholder="Nama Lengkap"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  validations={[required]}
                />
              </div>
              <div className="username">
                <label htmlFor="username">Username</label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username || ""}
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  validations={[required]}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  value={email || ""}
                  placeholder="Contoh: johndee@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  validations={[required]}
                />
              </div>
              <div className="pass">
                <label htmlFor="pass">Password</label>
                <Input
                  id="pass"
                  type={revPassword ? "text" : "password"}
                  value={password || ""}
                  placeholder="Masukkan Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  validations={[required]}
                />
                <i id="rev-pass" className="pass-eye">
                  <svg
                    onClick={togglePassword}
                    style={{ stroke: revPassword ? "#7126B5" : "#8A8A8A" }}
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <button type="submit">
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span className="ms-2 color-white">Daftar</span>
              </button>
              {statusRegister === true ? (
                <p className="succes-register">Register Success</p>
              ) : statusRegister === false ? (
                <p className="error-register">Register Failed</p>
              ) : (
                ""
              )}
            </Form>
            <p className="sign-acc">
              Sudah punya akun?
              <span>
                <Link to={"/login"}> Masuk di sini</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
