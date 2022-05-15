import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ProjectsContainer from "../containers/home/projects";
import Movies from "../containers/movies";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="nadina dollie" />
                <div className="wrapper about-page-wrapper">
                    <Header classOption="container" />
                    <div className="main-content">
                        <ProjectsContainer />
                        <Movies />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
