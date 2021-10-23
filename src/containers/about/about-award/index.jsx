import AwardItem from "../../../components/award-item";
import AboutData from "../../../data/global/about.json";

const AboutAward = () => {
    let data = AboutData.filter((d) => d.id.toLowerCase() == "awards")[0];
    return (
        <div className="award-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <h2 className="title">{data.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="award-content">
                            <div
                                className="award-item"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="award-year">{data.yearOne}</div>
                                <div className="content">
                                    {data.awardItem &&
                                        data.awardItem
                                            .slice(0, 3)
                                            .map((single, key) => {
                                                return (
                                                    <AwardItem
                                                        key={key}
                                                        data={single}
                                                    />
                                                );
                                            })}
                                </div>
                            </div>
                            <div
                                className="award-item"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <div className="award-year">{data.yearTwo}</div>
                                <div className="content">
                                    {data.awardItem &&
                                        data.awardItem
                                            .slice(3, 5)
                                            .map((single, key) => {
                                                return (
                                                    <AwardItem
                                                        key={key}
                                                        data={single}
                                                    />
                                                );
                                            })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAward;
