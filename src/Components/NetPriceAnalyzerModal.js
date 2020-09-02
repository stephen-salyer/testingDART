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
  Grid,
  Divider,
  TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import OperationsPayeeAutoComplete from './OperationsPayeeAutoComplete';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
    width: 400,
    height: '80vh',
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

export default function NetPriceAnalyzerModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-02-18T21:11:54')
  );

  const [selectedDate2] = React.useState(new Date('2021-01-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date2) => {
    setSelectedDate(date2);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => setOpen(true)}
      >
        4/6 Fields Filled Out
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" id="transition-modal-title">
                    Net Price Analyzer Fields
                  </Typography>
                  <IconButton onClick={() => setOpen(false)} color="inherit">
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Box style={{height: 1, width: '100%'}} pb={1}>
                <Divider />
              </Box>
              <Grid item xs={12}>
                <OperationsPayeeAutoComplete />
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth={true}
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    label="Start Communication Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth={true}
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    label="End Communication Date"
                    value={selectedDate2}
                    onChange={handleDateChange2}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Something Something"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Something Something"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
