import React from "react";
import ProjectHome from "../../../components/project-home";
import ProjectsData from "../../../data/projects.json";
const ProjectsContainer = () => {
    return (
        <div className="team-area">
            <div className="container">
                {ProjectsData &&
                    ProjectsData.map((single, key) => {
                        return (
                            <div
                                className="col-lg-12"
                                key={key}
                                data-aos="fade-up"
                                data-aos-delay={String(100 * key)}
                            >
                                <ProjectHome data={single} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ProjectsContainer;
