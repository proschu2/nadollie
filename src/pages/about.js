import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts";
import AboutContainer from "../containers/about";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="nadina dollie" />
                <div className="wrapper about-page-wrapper">
                    <Header classOption="container" />
                    <div className="main-content">
                        <AboutContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
