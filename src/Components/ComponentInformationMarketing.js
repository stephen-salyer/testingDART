import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Box,
  FormControlLabel,
  Radio,
  Typography,
  CardHeader,
  Divider,
  IconButton,
  Button,
} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import GeographyEligibility from './GeographyEligibility/GeographyEligibility';
import CustomerEligibility from './CustomerEligibility/CustomerEligibility';
import ProductEligibility from './ProductEligibility/ProductEligibility';
import {Add} from '@material-ui/icons';
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
  overrides: {
    MuiFormLabel: {
      root: {
        color: 'orange',
        '&$focused': {
          color: 'blue',
        },
      },
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
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

export default function ComponentInformationMarketing() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-01-01T03:24:00')
  );

  const [selectedDate2] = React.useState(new Date('2020-02-01T03:24:00'));

  const [selectedDate3] = React.useState(new Date('2020-02-01T03:24:00'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChange2 = (date2) => {
    setSelectedDate(date2);
  };

  const handleDateChange3 = (date3) => {
    setSelectedDate(date3);
  };

  return (
    <div className={classes.root}>
      <Box pt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Component Name"
              defaultValue="Canola"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Minimum Volume to Qualify"
              defaultValue="2"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Component Incentive Type
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Component Incentive Type"
                defaultValue={30}
              >
                <MenuItem value={10}>Activity Incentive</MenuItem>
                <MenuItem value={20}>Guarentee / Claim</MenuItem>
                <MenuItem value={30}>Payment Incentive</MenuItem>
                <MenuItem value={40}>Purchase Behavior Incentive</MenuItem>
                <MenuItem value={50}>Trade Incentive</MenuItem>
                <MenuItem value={60}>Volume Incentive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              component="fieldset"
              className={classes.formControlRadio}
            >
              <FormLabel>Taxes</FormLabel>
              <RadioGroup aria-label="quiz" name="quiz">
                <Box display="flex">
                  <FormControlLabel
                    value="best"
                    control={<Radio />}
                    label="Pay"
                  />
                  <FormControlLabel
                    value="worst"
                    control={<Radio />}
                    label="Do Not Pay"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Treatment</Typography>
            <Box display="flex" pt={2}>
              <Box pr={1} width="100%">
                <TextField
                  label="Go To Market Partners"
                  defaultValue="43%"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box pl={1} width="100%">
                <TextField
                  label="Grower"
                  defaultValue="57%"
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl
              component="fieldset"
              className={classes.formControlRadio}
            >
              <FormLabel>
                <Typography variant="subtitle1">
                  Is This Program For A Specific Customer?
                </Typography>
              </FormLabel>
              <RadioGroup aria-label="quiz" name="quiz">
                <Box display="flex">
                  <FormControlLabel
                    value="best"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="worst"
                    control={<Radio />}
                    label="No"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Season
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                disabled
                label="Season"
                defaultValue={10}
              >
                <MenuItem value={10}>N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sub-Country Commercial Area
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                disabled
                label="Sub-Country Commercial Area"
                defaultValue={10}
              >
                <MenuItem value={10}>N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <GeographyEligibility />
          <CustomerEligibility />
          <ProductEligibility />
          <Grid item xs={12}>
            <CardHeader
              titleTypographyProps={{variant: 'h6'}}
              title="Calculations Applied to Eligible Sales"
            />
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Component Tier Rate
              </InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Component Tier Rate"
                defaultValue={10}
              >
                <MenuItem value={10}>Date</MenuItem>
                <MenuItem value={20}>FOC</MenuItem>
                <MenuItem value={30}>None</MenuItem>
                <MenuItem value={40}>Sales Target</MenuItem>
                <MenuItem value={50}>Volume</MenuItem>
                <MenuItem value={60}>Flat Rate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Rate
              </InputLabel>
              <Select MenuProps={MenuProps} label="Rate" defaultValue={10}>
                <MenuItem value={10}>FOC Discount</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Calculation Base</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Calculation Base"
                defaultValue={10}
              >
                <MenuItem value={10}>Gross Sell Price (List Price)</MenuItem>
                <MenuItem value={20}>Net Invoice Price</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Calculation On</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Calculation On"
                defaultValue={10}
              >
                <MenuItem value={10}>Germ and Trait Only</MenuItem>
                <MenuItem value={20}>Germplasm Only</MenuItem>
                <MenuItem value={30}>Not Applicable</MenuItem>
                <MenuItem value={40}>Seed Treatment Only</MenuItem>
                <MenuItem value={50}>Trait Only</MenuItem>
                <MenuItem value={60}>Whole Bag</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Tier Rates</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Incentive"
              defaultValue="25"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                fullWidth={true}
                inputVariant="outlined"
                format="YYY/MM/dd"
                label="Start Date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                fullWidth={true}
                inputVariant="outlined"
                format="YYY/MM/dd"
                label="External End Date"
                value={selectedDate2}
                onChange={handleDateChange2}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                fullWidth={true}
                inputVariant="outlined"
                format="YYY/MM/dd"
                label="internal End Date"
                value={selectedDate3}
                onChange={handleDateChange3}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Estimated % Volume Impacted"
              defaultValue=""
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Box pb={1}>
              <Divider />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} display="flex" wrap="nowrap">
          <Grid container item spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Incentive"
                defaultValue="25"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth={true}
                  inputVariant="outlined"
                  format="YYY/MM/dd"
                  label="Start Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={4}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth={true}
                  inputVariant="outlined"
                  format="YYY/MM/dd"
                  label="External End Date"
                  value={selectedDate2}
                  onChange={handleDateChange2}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth={true}
                  inputVariant="outlined"
                  format="YYY/MM/dd"
                  label="internal End Date"
                  value={selectedDate3}
                  onChange={handleDateChange3}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Estimated % Volume Impacted"
                defaultValue=""
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container item xs={1} alignItems="center">
            <IconButton>
              <RemoveCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              endIcon={<Add />}
            >
              Add Additional Tier Rates
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
