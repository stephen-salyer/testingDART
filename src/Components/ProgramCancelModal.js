import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Button,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {red} from '@material-ui/core/colors';
import {Delete} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    outline: 0,
    minWidth: '40vw',
  },
  button: {
    maxWidth: '98px',
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
  padding: {
    padding: '4px 0 0 0',
    margin: '0 0 12px 0',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

export default function ProgramCancelModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography onClick={() => setOpen(true)}>Cancel</Typography>
      </ThemeProvider>
      <Modal
        disableEnforceFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="h5"
                id="transition-modal-title"
                style={{margin: '10px 0'}}
              >
                Are you sure you want to cancel this program?
              </Typography>
              <IconButton onClick={() => setOpen(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              Program Name Here
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Delete />}
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={classes.modalButton}
                >
                  Cancel
                </Button>
              </ThemeProvider>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
