import PageTitle from "../../../components/page-title";

const PageTitleContainer = () => {
    return (
        <div className="container">
            <div className="thumb" data-aos="fade-up">
                <img
                    className="w-100"
                    src={process.env.PUBLIC_URL + "./img/about/header.jpeg"}
                    alt="Alexis"
                />
            </div>
            <div className="row mt-5">
                <div className="col-lg-12" data-aos="fade-up">
                    <PageTitle
                        classOption="page-title-content content-style2 "
                        title="nadina dollie"
                    />
                </div>
            </div>
        </div>
    );
};

export default PageTitleContainer;
