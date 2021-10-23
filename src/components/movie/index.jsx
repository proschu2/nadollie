import PropTypes from "prop-types";

const Movie = ({ data }) => {
    console.log(data);
    return (
        <>
            <div className="row">
                <div className="col-lg-12" data-aos="fade-up">
                    <h2
                        className="title"
                        dangerouslySetInnerHTML={{
                            __html: data.title,
                        }}
                    />
                </div>
            </div>
            <div className="row">
                <div
                    className="col-md-6 col-lg-4 position-relative"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="w-100">
                        <img
                            className="rounded-3"
                            src={data.header}
                            alt="Nadina-Team"
                        />
                    </div>
                    {/*<h2 className="title">{data.title}</h2>
                 <ul>
                    {data.pagelinkText &&
                        data.pagelinkText.map((single, key) => {
                            return <li key={key}>{single}</li>;
                        })}
                </ul> */}
                </div>
                <div
                    className="col-md-6 col-lg-8 position-relative tours"
                    data-aos="fade-up"
                    data-aos-delay="450"
                >
                    {data.tours &&
                        data.tours.length > 0 &&
                        data.tours.map((single, key) => {
                            return (
                                <>
                                    <div
                                        className="item"
                                        data-aos="fade-up"
                                        data-aos-delay={String(300 + key * 100)}
                                    >
                                        <p>{single.city}</p>
                                        <a href={single.url}>
                                            {single.name.toLowerCase()}
                                        </a>
                                    </div>
                                </>
                            );
                        })}
                </div>
                {/* <div
                    className="col-lg-6 position-relative"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="thumb rounded-3 w-75">
                        <img src={data.header} alt="Nadina-Team" />
                    </div>
                    <h2 className="title">{data.title}</h2>
                    <ul>
                        {data.pagelinkText &&
                            data.pagelinkText.map((single, key) => {
                                return <li key={key}>{single}</li>;
                            })}
                    </ul>
                </div> */}
            </div>
        </>
    );
};

Movie.propTypes = {
    data: PropTypes.object,
};

export default Movie;
