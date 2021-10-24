import PropTypes from "prop-types";
import { LightgalleryItem } from "react-lightgallery";

const SceneItem = ({ src }) => {
    return (
        <div className="single-portfolio">
            <LightgalleryItem group="any" src={src}>
                <div className="thumbnail">
                    <div className="overlay">
                        <img src={src} alt="scene" />
                    </div>
                </div>
            </LightgalleryItem>
        </div>
    );
};

SceneItem.propTypes = {
    src: PropTypes.object,
};

export default SceneItem;
