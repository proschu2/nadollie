import AboutData from "../../../data/global/about.json";

const Blockquote = () => {
    const data = AboutData.filter((d) => d.id.toLowerCase() == "blockquote");
    return (
        <div className="blockquote-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <blockquote className="blockquote-style">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: data.excerpt,
                                }}
                            />
                            <div className="author-info">
                                <span className="name">{data.name}</span>
                                <span className="job">{data.designation}</span>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blockquote;
