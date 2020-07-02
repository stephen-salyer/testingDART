import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Typography,
  Box,
  IconButton,
  Grid,
  List,
  ListItemText,
  Divider,
  Tooltip,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {Timeline} from '@material-ui/icons';
import {red, green} from '@material-ui/core/colors';

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
    width: '50vw',
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
  listItemTextMargin: {
    marginBottom: '0',
  },
  listItemTertiary: {
    marginTop: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
}));

export default function ProgramChangesHistoryModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Tooltip title="View History">
        <IconButton onClick={() => setOpen(true)} edge="end">
          <Timeline />
        </IconButton>
      </Tooltip>
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
                History of Changes 1.1 - Program Name
              </Typography>
              <IconButton onClick={() => setOpen(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} style={{marginBottom: -32}}>
                <Typography variant="overline">
                  BOB BOBERSON • 2/13/2020, 1:31:46 PM
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <List style={{paddingLeft: 16}}>
                  <ListItemText
                    className={classes.listItemTextMargin}
                    primary="Changed From: "
                    secondary={
                      <>
                        <Typography>
                          <span
                            style={{
                              backgroundColor: red[100],
                              textDecoration: 'line-through',
                            }}
                          >
                            An Extremely
                          </span>{' '}
                          Long Program Name{' '}
                          <span
                            style={{
                              backgroundColor: red[100],
                              textDecoration: 'line-through',
                            }}
                          >
                            123123123123123
                          </span>
                        </Typography>
                      </>
                    }
                  />
                </List>
              </Grid>
              <Grid item xs={6}>
                <List style={{paddingLeft: 16}}>
                  <ListItemText
                    className={classes.listItemTextMargin}
                    primary="Changed To: "
                    secondary={
                      <>
                        <Typography>
                          <span
                            style={{
                              backgroundColor: green[100],
                              textDecoration: 'underline',
                            }}
                          >
                            A very
                          </span>{' '}
                          Long Program Name
                        </Typography>
                      </>
                    }
                  />
                </List>
              </Grid>
              <Grid item xs={12} style={{marginTop: -16}}>
                <Divider />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
