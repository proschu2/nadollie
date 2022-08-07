import React from "react";
import AboutData from "../../data/about.json";
import About from "../../components/about";

const AboutContainer = () => {
    return (
        <div className="team-area">
            <div className="container">
                {AboutData && (
                    <div className="col-lg-12">
                        <About data={AboutData} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutContainer;
