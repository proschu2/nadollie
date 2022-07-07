/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";

const About = ({ data }) => {
    return (
        <div className="about-section" id={data.id}>
            <div
                className="col-xs-12 col-md-5"
                data-aos="fade-up"
                data-aos-delay={String(100)}
            >
                <img src={data.photo} alt="Nadina" />
            </div>
            <div
                className="col-xs-4 col-md-5 about-text"
                dangerouslySetInnerHTML={{
                    __html: data.text,
                }}
                data-aos="fade-up"
                data-aos-delay={String(150)}
            />
        </div>
    );
};
/* 
const ProjectItem = ({ data }) => {
    return (
        <div className={data.classOption} id={data.id}>
            <div className="thumb ">
                <img
                    src={"img/projects/" + data.id + "/" + data.photo}
                    alt="Nadina-Team"
                />
            </div>
            <div className="content">
                <div className="member-info">
                    <h3
                        className="name"
                        dangerouslySetInnerHTML={{ __html: data.name }}
                    />
                </div>
            </div>
        </div>
    );
};

const ProjectHome = ({ data, link = true }) => {
    return link ? (
        <Link to={process.env.PUBLIC_URL + `/${data.id}`}>
            <ProjectItem data={data} />
        </Link>
    ) : (
        <ProjectItem data={data} />
    );
};
 */
About.propTypes = { data: PropTypes.object };

export default About;
