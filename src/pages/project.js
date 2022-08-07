import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ClipContainer from "../containers/home/projects/clip";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts";
import { PropTypes } from "prop-types";

const ProjectPage = ({
    match: {
        params: { id },
    },
}) => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="nadina dollie" />
                <div className="wrapper about-page-wrapper">
                    <Header classOption="container" />
                    <div className="main-content">
                        <ClipContainer id={id} />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

ProjectPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default ProjectPage;
