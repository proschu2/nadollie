import PageTitle from "../../../components/page-title";

const PageTitleContainer = () => {
    return (
        <div className="container">
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <PageTitle
                            classOption="page-title-content content-style2 text-center"
                            subTitle="About"
                            title="We Are Alexis Studio"
                        />
                    </div>
                </div>
            </div> */}
            <div className="thumb" data-aos="fade-up" data-aos-delay="300">
                <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "./img/about/header.jpeg"}
                    alt="Alexis"
                />
            </div>
        </div>
    );
};

export default PageTitleContainer;
