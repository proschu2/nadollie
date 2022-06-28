/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProjectHome = ({ data }) => {
    return (
        <Link to={process.env.PUBLIC_URL + `/${data.id}`}>
            <div className={data.classOption} id={data.id}>
                <div className="thumb ">
                    <img
                        src={"img/projects/" + data.id + "/" + data.image}
                        alt="Nadina-Team"
                    />
                </div>
                <div className="content">
                    <div className="member-info">
                        <h3
                            className="name"
                            dangerouslySetInnerHTML={{ __html: data.name }}
                        />
                        {/* <span className="designation">{data.designation}</span> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

ProjectHome.propTypes = {
    data: PropTypes.object,
};

export default ProjectHome;
