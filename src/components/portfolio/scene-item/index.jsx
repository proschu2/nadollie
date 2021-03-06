import PropTypes from "prop-types";
import { LightgalleryItem } from "react-lightgallery";

const SceneItem = ({ src, hidden }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryItem group="any" src={src}>
                <div className="thumbnail">
                    <div className="overlay" hidden={hidden}>
                        <img src={src} alt="scene" />
                    </div>
                </div>
            </LightgalleryItem>
        </div>
    );
};

SceneItem.propTypes = {
    src: PropTypes.string,
    hidden: PropTypes.bool,
};

export default SceneItem;
