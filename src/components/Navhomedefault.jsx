import '../style/riostyle.css';
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Navhomedefault(){
    const [openSideBar, setEnableBell] = useState(false);
    return(
        <>
        <div id="overlay" style={{display: openSideBar ? "block":"none"}}></div>
        <header className="home-header">
        <nav className="home-navbar">
            <div className="logo-wrapper">
                <div className="home-logo"></div>
                <div className="home-burger" onClick={() => setEnableBell(!openSideBar)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 18H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 12H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 6H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>                       
                </div>
                <div className="home-search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Cari di sini ..." />
                </div>
            </div>
            <div className={`${openSideBar ? 'open-homenav':'profile-wrapper'}`}>
                <div className="home-menu">
                    <h4 className="brand-title">Second Hand<svg onClick={() => setEnableBell(!openSideBar)} className="close-menunav" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </h4>
                    <Link to={'/login'} className="btn-masuk">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33325 14.1666L12.4999 9.99992L8.33325 5.83325" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 10H2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p>Masuk</p>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
    </>
    )
}