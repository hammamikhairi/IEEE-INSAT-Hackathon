import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import logo from '../../public/images/logo.png';
import MainMenu from "./main-menu/main-menu";

export default function Navbar({ mainMenu }) {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const navbarAreaEl = useRef(null);

    function fixNavBar() {
        if (navbarAreaEl.current) {
            setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixNavBar);

        return () => {
            window.removeEventListener('scroll', fixNavBar);
        }
    }, []);

    return (
        <header className="header">
            <div ref={navbarAreaEl} className={`navbar-area ${isNavbarSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={55}
                                        height={55}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                <MainMenu mainMenuLinks={mainMenu} />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
