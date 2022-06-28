/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

ProjectItem.propTypes = { data: PropTypes.object };

ProjectHome.propTypes = {
    data: PropTypes.object,
    link: PropTypes.bool,
};

export default ProjectHome;
