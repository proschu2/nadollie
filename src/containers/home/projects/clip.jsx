import React from "react";
import ProjectHome from "../../../components/project-home";
import ProjectsData from "../../../data/projects.json";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const PlaySuisseIcon = () => {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="37px"
            height="21px"
            viewBox="0 0 37 21"
            enableBackground="new 0 0 37 21"
            xmlSpace="preserve"
        >
            <image
                id="image0"
                width="37"
                height="21"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAcCAQAAACJkCR8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAA
DdcAAA3XAUIom3gAAAAHdElNRQfmBwcSMizjNPkaAAABwHpUWHRSYXcgcHJvZmlsZSB0eXBlIGlj
YwAAOI2lU1uOHCEM/OcUOYLxszlODzRS7n+BGAzz2tlIm1hCqMtQLpvq9LvW9GuEGiYYgSdoVdJm
BEwT0qaXsaEgGyOCHFLkRAC71NMWKzsAzQly0qxkZMBZQIAr/EN0rzoU5Q00wnZX9sNIPzzflFWM
NArNzkYwJG8MDI0joStBauYTgo2XI/DMrvfwcSz8XKPAmnycc4yRaI8LL/hV77g94VuQ44OI/WVC
KmZeFcAvfMa/OZ+GVENt8U07wT4LN8BqwdW94Lxx261xcria6Psr7ZesKnqJCO0LK+0EPkLg4stF
yHi10agOp4nvnlA/NIaMbX1fcWZYQnAR4LuA9HcF+XwoEFjFMIrNIhRFmJ1I+/ghfOWHAnj8Ek8x
HAxvBnZPKRHhsyEzVI6b0q4+glDmt5WpsLcCE7+dee5tVaJWJ1F1FZ8UaI/O6OhBSOWjUuTSQ1E/
5mvctPJHQiw283bMPR/NAc1um3ubg2hPHtVj8uJpMQQp8yKFzeCU24vvImgTwUltXhQOg3Gt82Ap
5VwVgrhL/c53e9hvzw77n/tivP8gejVi+gO9xyAjkpaHxgAAAk9JREFUSMetld1LFWEQh599XQoK
69RJzJswoyIiL0KKvog+oL8gCIkCz4oEXRRCQXhVgRdhEfSF5wRRQV31T0SRaKZlZElCdd2n3WTH
/XVx1mX3fU/l6pm5mnln5tmdeWfXAwHAapp4AeAxdxEs4RC52SJ4DPHKqaGKNuihJnSwYmWBqFnv
VdZ0pKHOV6kghFbpgSRpUgeyYYRa9ElJ6XXzDZDnKkcAWEs/+6I2ZOrZX60I0sAV2mO7hSJ7M2P+
I4YSR1OedRTZU1uM4Rszlm89JXbXEmM4yXVCy7uBErtqhzFM0cMNB7ORIjtsjBwFylZm6Eb6wE/O
YThhbdAmSnQwAEoe+OynMUEWjSxN5bXSjklBB2dp9bqpULaMaVtyb4RyGpIUptSW9OmMuk30lFOc
peiMYDMl2lJN8zCAl1JbPEuNib8zPzhDyblpW7hdwSxs8MSY71zigxPRSleqx/OFRM1YSQ/NTsRz
rjl3L6P4MWIFlznmnA9TYHSh7fIjRI4+jjunIwQVRDxd8RusydWlrNC6PiFlTwDL6aPgIEbpYDiJ
EPjspCFRJqSJC+QTWY+4Z+3JCELL1C9XXqrN/reomq7Rx1TeRTfGJ0cvgfMWYxQYSjWKaj9mgW+5
jBvpc4vDTvZrAgarl52PGBY5ld4QMFA7BBg6uZPyjBPwrJYIMHymm7ux/ZaAp7VFVMb0ldPcB2CC
Tp5kRnj/sIDZu/GFU9SxlS4eZ0aE/GIm/vDUMV31KaJNyJPnXVaEYDHbqU+s0ziTVV9OtiMLZA4d
/APn51qASneSNAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNy0wN1QxODo1MDo0NCswMDowMFNV
aPwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDctMDdUMTg6NTA6NDQrMDA6MDAiCNBAAAAAG3RF
WHRpY2M6Y29weXJpZ2h0AFB1YmxpYyBEb21haW62kTFbAAAAInRFWHRpY2M6ZGVzY3JpcHRpb24A
R0lNUCBidWlsdC1pbiBzUkdCTGdBEwAAABV0RVh0aWNjOm1hbnVmYWN0dXJlcgBHSU1QTJ6QygAA
AA50RVh0aWNjOm1vZGVsAHNSR0JbYElDAAAAAElFTkSuQmCC"
            />
        </svg>
    );
};

const ClipContainer = ({ id }) => {
    const data = ProjectsData.filter((project) => project.id === id);
    console.log("data", data);
    return (
        <>
            <div className="team-area">
                <div className="container">
                    {data && data[0].reel && (
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
                            volume={0}
                            muted={true}
                            loop={true}
                        />
                    )}
                    {data &&
                        data[0].images &&
                        data[0].images.map((single, key) => {
                            const v = { photo: single, id };
                            return (
                                <div
                                    className="col-lg-12 text-center"
                                    key={key}
                                    data-aos="fade-up"
                                    data-aos-delay={String(100 * key)}
                                >
                                    <ProjectHome data={v} link={false} />
                                </div>
                            );
                        })}
                    {data && data[0].text && (
                        <div className="container-fluid">
                            <div
                                className="row align-items-center justify-content-between"
                                data-aos="fade-up"
                                data-aos-delay={String(
                                    100 * data[0].images.length + 50
                                )}
                            >
                                <p
                                    className="col-sm-8 col-lg-6"
                                    style={{
                                        color: "white",
                                        lineHeight: "100%",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: data[0].text,
                                    }}
                                />
                                {data[0].playSuisse && (
                                    <div
                                        className="col-sm-4 col-lg-6 "
                                        style={{ textAlign: "right" }}
                                    >
                                        <a
                                            href={data[0].playSuisse}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <PlaySuisseIcon />
                                        </a>
                                    </div>
                                )}
                                {data[0].youtube && (
                                    <div
                                        className="col-sm-4 col-lg-6 "
                                        style={{ textAlign: "right" }}
                                    >
                                        <a
                                            href={data[0].youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className="social_youtube"
                                                style={{ fontSize: "21px" }}
                                            ></i>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
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
