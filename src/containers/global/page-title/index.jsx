import PageTitle from "../../../components/page-title";

const PageTitleContainer = () => {
    return (
        <div className="page-title-area">
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
                    src={
                        "https://imgr.search.brave.com/8vsJJD_5tnxjGfilcMk6AI3jiFyc9UyE7cg5OrA5kVI/fit/1024/576/ce/1/aHR0cDovL3Zlcnph/c2NhaW5yZWQuY2gv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDMvV2hhdHNBcHAt/SW1hZ2UtMjAyMS0w/My0xOC1hdC0xMy4z/Ni41Mi5qcGVn"
                    } //{process.env.PUBLIC_URL + "./img/about/01.jpg"}
                    alt="Alexis"
                />
            </div>
        </div>
    );
};

export default PageTitleContainer;
