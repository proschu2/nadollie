import React from "react";
import ProjectHome from "../../../components/project-home";
import ProjectsData from "../../../data/projects.json";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const ClipContainer = ({ id }) => {
    const data = ProjectsData.filter((project) => project.id === id);
    console.log("data", data);
    return (
        <>
            <div className="team-area">
                <div className="container">
                    {data && (
                        <ReactPlayer
                            url={
                                "img/projects/" +
                                data[0].id +
                                "/" +
                                data[0].id +
                                "_reel.mp4"
                            }
                            width="100%"
                            height="100%"
                            controls={true}
                            playing={true}
                            loop={true}
                        />
                    )}
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
                    {data && data[0].text && (
                        <p
                            className="col-lg-12"
                            data-aos="fade-up"
                            style={{ color: "white" }}
                            data-aos-delay={String(
                                100 * data[0].images.length + 50
                            )}
                            dangerouslySetInnerHTML={{ __html: data[0].text }}
                        ></p>
                    )}
                </div>
            </div>
        </>
    );
};

ClipContainer.propTypes = {
    id: PropTypes.string,
};

export default ClipContainer;
