import PropTypes from "prop-types";
import React from "react";
import Button from "../button/index";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade direction="up" ref={ref} {...props} />;
});

const TeamModal = NiceModal.create(({ name, designation }) => {
    const modal = useModal();
    return (
        <Modal
            open={modal.visible}
            onClose={() => modal.hide()}
            TransitionProps={{
                onExited: () => modal.remove(),
            }}
        >
            <div>
                <div id="modalTitle">{name}</div>
                <div>
                    <div id="modalText">{designation}</div>
                </div>
            </div>
            {/* <Dialog
            TransitionCompon    ent={Transition}
            open={modal.visible}
            onClose={() => modal.hide()}
            TransitionProps={{
                onExited: () => modal.remove(),
            }}
        >
            <DialogTitle id="modalTitle">{name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="modalText">
                    {designation}
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
        </Dialog> */}
        </Modal>
    );
});

TeamModal.propTypes = {
    data: PropTypes.object,
};
const showModal = (data) => {
    NiceModal.show(TeamModal, { ...data });
};

showModal.propTypes = {
    data: PropTypes.object,
};

export default showModal;
