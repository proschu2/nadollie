import PropTypes from "prop-types";
import { LightgalleryProvider } from "react-lightgallery";
import PortfolioData from "../../data/portfolio.json";
import useMasonry from "../../hooks/use-masonry";
import SceneItem from "../portfolio/scene-item";

const Movie = ({ data }) => {
    const { categories } = useMasonry(
        PortfolioData,
        ".portfolio-list",
        ".masonry-grid",
        ".messonry-button",
        ".messonry-button button"
    );
    const folder = "img/movies/scenes/" + data.id + "/";
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
                                        /* data-aos-delay={String(300 + key * 100)} */
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
            </div>
            <div className="row">
                <div
                    className="col-md-6 col-lg-4 position-relative"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {data.info &&
                        data.info.map((single, key) => (
                            <>
                                <div
                                    className="item"
                                    data-aos="fade-up"
                                    /* data-aos-delay={String(300 + key * 100)} */
                                >
                                    <p>{single.role}</p>
                                    <p className="person">
                                        {single.name.toLowerCase()}
                                    </p>
                                </div>
                            </>
                        ))}
                </div>
                <div
                    className="col-md-6 col-lg-8 position-relative tours"
                    data-aos="fade-up"
                    data-aos-delay="450"
                >
                    <div className="portfolio-area portfolio-default-area">
                        <div className="container-fluid">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
                                <div className="col resizer"></div>
                                <LightgalleryProvider>
                                    {data.scenes &&
                                        data.scenes.map((im, key) => (
                                            <div
                                                key={key}
                                                className={`col masonry-grid mb-30`}
                                                data-aos="fade-up"
                                                /* data-aos-delay={String(
                                                    600 + 100 * key
                                                )} */
                                            >
                                                <SceneItem
                                                    key={key}
                                                    src={folder + im}
                                                />
                                            </div>
                                        ))}
                                </LightgalleryProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Movie.propTypes = {
    data: PropTypes.object,
};

export default Movie;
