import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Box,
  List,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {RemoveCircle} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Operations() {
  const classes = useStyles();

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

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  };

  const payeeValues = [
    'Agent',
    'Dealer / Retailer',
    'Distributor',
    'GTM and Farmer Dual Pay',
    'Licensee and Multiplier',
    'Wholesale',
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FormControl variant="outlined" fullWidth={true}>
            <InputLabel id="demo-mutiple-checkbox-label">Payee</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              label="Payee"
              value={personName}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={menuProps}
            >
              {payeeValues.map((value) => (
                <MenuItem key={value} value={value}>
                  <Checkbox checked={personName.indexOf(value) > -1} />
                  <ListItemText primary={value} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box style={{maxHeight: '255px', overflow: 'scroll'}}>
            <List>
              <Box p={1}>
                <ListItemText primary="Agent" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <RemoveCircle />
                  </IconButton>
                </ListItemSecondaryAction>
              </Box>
            </List>
            <Divider />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              label="Communication Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth={true}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              label="Communication Date"
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
