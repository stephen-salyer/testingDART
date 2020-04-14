import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {IconButton, Box} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="toggle password visibility"
        edge="start"
        onClick={handleOpen}
      >
        <InfoOutlinedIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box display="flex" justifyContent="space-between">
              <h2 id="transition-modal-title" style={{margin: '10px 0'}}>
                Info Title Modal Here
              </h2>
              <IconButton
                onClick={handleClose}
                color="inherit"
                style={{height: '48px'}}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <p id="transition-modal-description">
              Text here that describes the section with the info bubble that you
              clicked on
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
