import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Button,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListSubheader,
  Divider,
} from '@material-ui/core';
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
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    outline: 0,
    width: '35vw',
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
  },
  modalButton: {
    marginTop: '16px',
  },
  padding: {
    padding: '4px 0 0 0',
    margin: '0 0 12px 0',
  },
}));

export default function TowerReviewApproveProgramsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => setOpen(true)}
        className={classes.button}
      >
        Approve 2 Programs
      </Button>
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
        style={{padding: 16}}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="h5"
                id="transition-modal-title"
                style={{margin: '10px 0'}}
              >
                Approval Acknowledgement
              </Typography>
              <IconButton onClick={() => setOpen(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <List
              subheader={
                <ListSubheader style={{lineHeight: 1.6}}>
                  As a finance approver with DOA to approve the selected
                  programs, by clicking approve, i acknowledge that...
                </ListSubheader>
              }
              className={classes.root}
            >
              <ListItem>
                <ListItemIcon>
                  <Checkbox defaultChecked color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="The customer earnings requirements of each program is clear,
              accurate, and aligned with the business purpose."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Checkbox defaultChecked color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="The accounting / accural methodology will accurately
                 reflect sales deductions (or expenses) and the related liabilities in the appropriate period."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Checkbox defaultChecked color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Customer specific agreements or contracts, if any, have been reviewed 
                in conjucture with the review of the program accounting."
                />
              </ListItem>
            </List>
            <Box display="flex" flexDirection="column" pt={1}>
              <Divider />
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={classes.modalButton}
                >
                  Approve Programs
                </Button>
              </Box>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
