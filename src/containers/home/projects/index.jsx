import React from "react";
import ProjectHome from "../../../components/project-home";
import AboutData from "../../../data/global/about.json";
const TeamContainer = () => {
    const data = AboutData.filter((d) => d.id.toLowerCase() == "team")[0];
    console.log(data);
    return (
        <div className="team-area">
            <div className="container">
                {/* <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h2 className="title">{data.title}</h2>
                    </div>
                </div>
                <div className="row"> */}
                {data.team &&
                    data.team.map((single, key) => {
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
                {/* </div> */}
            </div>
        </div>
    );
};

export default TeamContainer;
