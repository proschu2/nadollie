/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";

const ProjectHome = ({ data }) => {
    return (
        <div className={data.classOption} id={data.id}>
            <div className="thumb ">
                <img src={data.image} alt="Nadina-Team" />
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
    );
};

ProjectHome.propTypes = {
    data: PropTypes.object,
};

export default ProjectHome;
