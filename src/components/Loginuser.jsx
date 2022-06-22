import "../style/riostyle.css";
import { useState } from "react";
import Hero from "../images/hero.png"
export default function Loginuser(){
    const [revPassword, unrevPassword] = useState(false);
    const togglePassword = () => {
        unrevPassword(!revPassword);
    }
    return(
        <>
            <div className="login-page">
                <img src={Hero} className="hero-image" alt="hero"/>
                <p className="brand-name">Second<br />Hand.</p>
                <div className="login-layout">
                    <header className="arrow-back">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </header>
                    <div className="login-form">
                        <p className="masuk">Masuk</p>
                        <form action="">
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="text" placeholder="Contoh: johndee@gmail.com" />
                            </div>
                            <div className="pass">
                                <label htmlFor="pass">Password</label>
                                <input id="pass" type={revPassword ? "text" : "password"} placeholder="Masukkan Password" />
                                <i id="rev-pass" className="pass-eye">
                                    <svg onClick={togglePassword} style={{stroke: revPassword ? "#7126B5" : "#8A8A8A"}} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </i>
                            </div> 
                            <button><a href="#">Masuk</a></button>
                        </form>
                        <p className="sign-acc">Belum punya akun? <span><a href="register.html">Daftar di sini</a></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}