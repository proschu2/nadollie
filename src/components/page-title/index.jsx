import PropTypes from "prop-types";

const PageTitle = ({ title, classOption }) => {
    return (
        <div className={`page-title-content ${classOption}`}>
            <h1 className="title">{title}</h1>
        </div>
    );
};

PageTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    classOption: PropTypes.string,
};
PageTitle.defaultProps = {
    classOption: "content-style2 text-center",
};

export default PageTitle;
