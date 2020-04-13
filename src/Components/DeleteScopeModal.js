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
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {red} from '@material-ui/core/colors';

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
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: '8px',
    maxWidth: '98px',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

export default function DeleteScopeModal() {
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
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </ThemeProvider>
      <Modal
        disableEnforceFocus
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
            <Typography variant="h5" gutterBottom id="transition-modal-title">
              Are you sure you want to delete this scope?
            </Typography>
            <Typography variant="subtitle" gutterBottom>
              North America • US • Crop Protection • Glyphosate • All
            </Typography>
            <Typography variant="caption" gutterBottom>
              (The above text is placeholder)
            </Typography>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </ThemeProvider>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
