import React, { useState, Fragment } from "react";
import style from "@/components/AppHeader.module.scss";
import Logo from "@/assets/images/logo.svg";
import IconHamburger from "@/assets/images/icon-hamburger.svg";
import IconCloseMenu from "@/assets/images/icon-close-menu.svg";
const AppHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Fragment>
            {menuOpen && (
                <div
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    className={
                        menuOpen
                            ? `${style["nav__menu--overlay"]} ${style.open}`
                            : style["nav__menu--overlay"]
                    }
                ></div>
            )}
            <nav className={style.nav}>
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
                    className={
                        menuOpen
                            ? `${style.nav__menu} ${style.open}`
                            : style.nav__menu
                    }
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
