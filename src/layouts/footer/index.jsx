import { Link } from "react-router-dom";
import FooterLogo from "../../components/footer-logo";

const Footer = () => {
    return (
        <footer className=" footer-area reveal-footer container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item">
                                nadina dollie (1995) is a swiss based
                                cinematographer
                            </div>
                            {/* <div className="widget-item">
                                <div className="widget-footer-nav"></div>
                            </div> */}
                            <div className="widget-item">
                                <div className="widget-copyright">
                                    <p>
                                        © {new Date().getFullYear()} all rights
                                        reserved
                                    </p>
                                </div>
                            </div>
                            <div className="widget-item">
                                <ul className="widget-social">
                                    <li>
                                        <a
                                            href="tel:+41794226696"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icon_phone"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:film@nadinadollie.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="icon_mail"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/pashmina__/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
