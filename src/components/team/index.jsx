/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";

const Team = ({ data }) => {
    return (
        <div className={data.classOption}>
            <div className="thumb rounded-3">
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
                    {data.twitter && (
                        <a
                            href={"https://twitter.com/" + data.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="social_twitter"></i>
                        </a>
                    )}
                    {data.facebook && (
                        <a
                            href={"https://facebook.com/" + data.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="social_facebook"></i>
                        </a>
                    )}
                    {data.instagram && (
                        <a
                            href={"https://www.instagram.com/" + data.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="social_instagram_square"></i>
                        </a>
                    )}
                    {data.film && (
                        <a
                            href={data.film}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="icon_film"></i>
                        </a>
                    )}
                    {data.linkedin && (
                        <a
                            href={
                                "https://www.linkedin.com/in/" + data.linkedin
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="social_linkedin_square"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

Team.propTypes = {
    data: PropTypes.object,
};

export default Team;
