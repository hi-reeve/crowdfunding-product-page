import React, { useState, Fragment, useEffect, useRef } from "react";
import style from "@/components/AppHeader.module.scss";
import Logo from "@/assets/images/logo.svg";
import IconHamburger from "@/assets/images/icon-hamburger.svg";
import IconCloseMenu from "@/assets/images/icon-close-menu.svg";
const AppHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navElement = useRef();
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    const handleScroll = () => {
        if (window.scrollY > 0) {
            navElement.current.classList.add(style.scrolled);
        } else {
            navElement.current.classList.remove(style.scrolled);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Fragment>
            {menuOpen && (
                <div
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    className={`${style["nav__menu--overlay"]} ${
                        menuOpen ? style.open : ""
                    }`}
                ></div>
            )}
            <nav ref={navElement} className={style.nav}>
                <div className={style.nav__brand}>
                    <img src={Logo} className={style.nav__logo} alt="logo" />
                </div>
                <div className={style.nav__toggle}>
                    <img
                        onClick={handleMenuOpen}
                        alt="hamburger icon"
                        src={menuOpen ? IconCloseMenu : IconHamburger}
                        className={style["nav__toggle--icon"]}
                    />
                </div>
                <div
                    className={`${style.nav__menu} ${
                        menuOpen ? style.open : ""
                    }`}
                >
                    <div className={style.nav__link}>About</div>
                    <div className={style.nav__link}>Discover</div>
                    <div className={style.nav__link}>Get Started</div>
                </div>
            </nav>
        </Fragment>
    );
};

export default AppHeader;
