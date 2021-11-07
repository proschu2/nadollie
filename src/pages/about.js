import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutService from "../containers/about/about-service/index.jsx";
import TeamContainer from "../containers/about/team";
import Movies from "../containers/movies";
import PageTitleContainer from "../containers/global/page-title";
import Footer from "../layouts/footer";
import Layout from "../layouts";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="nadina dollie" />
                <div className="wrapper about-page-wrapper">
                    {/* <Header classOption="hb-border" /> */}
                    <div className="main-content">
                        <PageTitleContainer />
                        <AboutService />
                        <TeamContainer />
                        {/* <Blockquote /> */}
                        {/* <AboutGallery /> */}
                        <Movies />
                        {/*  <AboutAward /> */}
                        {/* <BrandContainer /> */}
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
