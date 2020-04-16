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
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
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

export default function DeleteScopeModal({onDelete}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpen(true)}
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
                Are you sure you want to delete this scope?
              </Typography>
              <IconButton onClick={() => setOpen(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              North America • US • Crop Protection • Glyphosate • All
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              className={classes.padding}
            >
              (The above text is placeholder)
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setOpen(false);
                    onDelete();
                  }}
                  className={classes.modalButton}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </ThemeProvider>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
