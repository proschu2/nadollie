/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
/* import { Link } from "react-router-dom";
import showModal from "../modal/index"; */

const Team = ({ data }) => {
    return (
        <div className={data.classOption}>
            <div className="thumb">
                <img src={data.image} alt="Nadina-Team" />
            </div>
            <div className="content">
                <div className="member-info">
                    <h3
                        className="name"
                        dangerouslySetInnerHTML={{ __html: data.name }}
                    />
                    <span className="designation">{data.designation}</span>
                </div>
                <div className="member-icons">
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_twitter"></i>
                    </a>
                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_facebook"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="social_linkedin_square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

Team.propTypes = {
    data: PropTypes.object,
};

export default Team;
