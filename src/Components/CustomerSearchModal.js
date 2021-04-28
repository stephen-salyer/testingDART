import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
  Button,
  Typography,
  Box,
  CardHeader,
  Divider,
  Grid,
} from '@material-ui/core';
import CustomerEligibilityInformation from './CustomerEligibilityInformation';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    display: 'flex',
    flexDirection: 'column',
    outline: 0,
    minWidth: '800px',
    height: 780,
  },
  modalButton: {
    marginTop: '8px',
    maxWidth: '98px',
  },
}));

export default function CustomerSearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
        style={{
          height: '56px',
        }}
      >
        Search Customers
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
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CardHeader
              title={
                <>
                  <Box display="flex" alignItems="center" pl={1}>
                    <Typography variant="h5">Search Customers</Typography>
                  </Box>
                </>
              }
            />
            <Divider />
            <CustomerEligibilityInformation />
            <Grid item xs={12}>
              <Divider />
              <Box display="flex" justifyContent="space-between" p={2}>
                <Box display="flex" alignItems="center">
                  <Typography variant="caption">
                    2 Customers Selected
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Box pr={1}>
                    <Button color="primary" onClick={() => setOpen(false)}>
                      Go Back
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    Done
                  </Button>
                </Box>
              </Box>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
