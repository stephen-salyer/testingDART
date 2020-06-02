import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8}>
          <TextField
            error
            label="Program Name"
            defaultValue="An_Extremely Long Program Name 123123123123123"
            variant="outlined"
            helperText="Do Not Use '_'"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            id="outlined-error"
            label="Program ID"
            defaultValue="Program ID Here"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField label="Program Version" defaultValue="1.1" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField label="Program Status" defaultValue="Draft" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Market Year
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              value={age}
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              }}
              onChange={handleChange}
              label="Market year"
            >
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={20}>2021</MenuItem>
              <MenuItem value={30}>2022</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              label="Start Communication Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              label="End Communication Date"
              value={selectedDate2}
              onChange={handleDateChange2}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </div>
  );
}
