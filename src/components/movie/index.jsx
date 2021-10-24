import PropTypes from "prop-types";
import { LightgalleryProvider } from "react-lightgallery";
import SceneItem from "../portfolio/scene-item";
import { useState, useEffect } from "react";
import imagesloaded from "imagesloaded";
import Isotope from "isotope-layout";
import { Link } from "react-scroll";

const Movie = ({ data }) => {
    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    useEffect(() => {
        if (showInfo) {
            const masonryList = document.querySelector(".portfolio-list");
            imagesloaded(masonryList, () => {
                const projectItems = masonryList.querySelectorAll(
                    ".masonry-grid"
                );
                let start = 1;
                while (start < projectItems.length) {
                    projectItems[start].classList.add("grid-width-2");
                    start += 4;
                }
                new Isotope(masonryList, {
                    itemSelector: ".masonry-grid",
                });
            });
        }
    }, [showInfo]);

    const folder = "img/movies/scenes/" + data.id + "/";
    return (
        <>
            <div className="row align-items-end">
                <div
                    className="col-md-6 col-lg-4 position-relative"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <Link
                        spy={true}
                        smooth={true}
                        delay={0}
                        to={`projects`}
                        onClick={toggleInfo}
                    >
                        <div className="team-member pos">
                            <img
                                className="rounded-3"
                                src={data.header}
                                alt="Movie Info"
                            />
                            <div className="content poster">
                                <div className="member-info">
                                    <h3
                                        className="name"
                                        dangerouslySetInnerHTML={{
                                            __html: data.title,
                                        }}
                                    />
                                    <span className="designation">
                                        {data.year}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                {showInfo && (
                    <div
                        className="col-md-6 col-lg-8 position-relative tours"
                        /* data-aos="fade-up"
                        data-aos-delay="450" */
                        id={`tours_${data.id}`}
                    >
                        {data.tours &&
                            data.tours.length > 0 &&
                            data.tours.map((single, key) => {
                                return (
                                    <>
                                        <div
                                            key={key}
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
                )}
            </div>
            {showInfo && (
                <div className="row align-items-start text-end">
                    <div
                        className="col-md-6 col-lg-4 position-relative"
                        /*  data-aos="fade-up"
                        data-aos-delay="300" */
                    >
                        <div className="bts-area bts-default-area">
                            {data.info &&
                                data.info.map((single, key) => (
                                    <>
                                        <div
                                            key={key}
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
                    </div>
                    <div
                        className="col-md-6 col-lg-8 position-relative"
                        data-aos="fade-up"
                        /* data-aos-delay="450" */
                    >
                        <div className="bts-area bts-default-area">
                            <div className="container-fluid">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list mb-n30">
                                    <div className="col resizer"></div>
                                    <LightgalleryProvider>
                                        {data.scenes &&
                                            data.scenes.map((im, key) => (
                                                <div
                                                    key={key}
                                                    className={`col masonry-grid mb-30`}
                                                    /*  data-aos="fade-up"
                                                    data-aos-delay={String(
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
            )}
        </>
    );
};

Movie.propTypes = {
    data: PropTypes.object,
};

export default Movie;
