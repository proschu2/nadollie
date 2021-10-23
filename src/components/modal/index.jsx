import PropTypes from "prop-types";
import React from "react";
import Button from "../button/index";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Fade from "@mui/material/Fade";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade direction="up" ref={ref} {...props} />;
});

const Modal = NiceModal.create(({ data }) => {
    const modal = useModal();
    return (
        <Dialog
            TransitionComponent={Transition}
            open={modal.visible}
            onClose={() => modal.hide()}
            TransitionProps={{
                onExited: () => modal.remove(),
            }}
        >
            <DialogTitle id="modalTitle">{data.name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="modalText">
                    {data.designation}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => modal.hide()} color="primary">
                    Disagree
                </Button>
                <Button onClick={() => modal.hide()} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
});

Modal.propTypes = {
    data: PropTypes.object,
};
const showModal = ({ data }) => {
    NiceModal.show(Modal, data);
};

showModal.propTypes = {
    data: PropTypes.object,
};

export default showModal;
