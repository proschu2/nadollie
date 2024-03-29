import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import HamburgerMenu from "../../components/hamburger-menu";
import HeaderSearch from "../../components/header-search";
import Logo from "../../components/logo";
import PopupSearch from "../../components/popup-search";
import { Link } from "react-router-dom";

const Header = ({ classOption }) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [searchbarShow, setSearchbarShow] = useState(false);
    const onSearchHandler = () => {
        setSearchbarShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".header-area");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };
    return (
        <Fragment>
            <header
                className={`header-area header-default sticky-header ${classOption}`}
            >
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        {/* <div className="col-auto">
                            <div className="header-action-area">
                                <button
                                    className="btn-menu"
                                    onClick={onCanvasHandler}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <span className="menu-text">Menu</span>
                            </div>
                        </div> */}

                        <div className="col-auto">
                            <div className="header-logo-area">
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                    nadina dollie
                                </Link>
                                {/* <Logo
                                    image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                /> */}
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="header-logo-area">
                                <Link to={process.env.PUBLIC_URL + "/about"}>
                                    about
                                </Link>
                                {/* <Logo
                                    image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <PopupSearch show={searchbarShow} onClose={onSearchHandler} />
            <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} />
        </Fragment>
    );
};

Header.propTypes = {
    classOption: PropTypes.string,
};

Header.defaultProps = {
    classOption: "header-area header-default sticky-header",
};

export default Header;
