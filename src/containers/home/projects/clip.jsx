import React from "react";
import ProjectHome from "../../../components/project-home";
import ProjectsData from "../../../data/projects.json";
import PropTypes from "prop-types";

const ClipContainer = ({ id }) => {
    const data = ProjectsData.filter((project) => project.id === id);
    console.log(data);
    return (
        <div className="team-area">
            <div className="container">
                {data &&
                    data[0].images &&
                    data[0].images.map((single, key) => {
                        console.log(single);
                        const v = { photo: single, id };
                        console.log(v);
                        return (
                            <div
                                className="col-lg-12"
                                key={key}
                                data-aos="fade-up"
                                data-aos-delay={String(100 * key)}
                            >
                                <ProjectHome data={v} link={false} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

ClipContainer.propTypes = {
    id: PropTypes.string,
};

export default ClipContainer;
