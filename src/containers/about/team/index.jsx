import React from "react";
import Team from "../../../components/team";
import AboutData from "../../../data/global/about.json";
const TeamContainer = () => {
    const data = AboutData.filter((d) => d.id.toLowerCase() == "team")[0];
    console.log(data);
    return (
        <div className="team-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h2 className="title">{data.title}</h2>
                    </div>
                </div>
                <div className="row">
                    {data.team &&
                        data.team.map((single, key) => {
                            return (
                                <div
                                    className="col-sm-6 col-md-4"
                                    key={key}
                                    data-aos="fade-up"
                                >
                                    <Team data={single} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default TeamContainer;
