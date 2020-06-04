import React from 'react';
import 'typeface-roboto';
import {
  Grid,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  CardHeader,
  Divider,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const inputs = [
  {
    id: 1,
    key: 'region',
    label: 'Region',
    options: [
      'North America',
      'Asia / Pacific',
      'Europe / Middle East',
      'South America',
    ],
    size: 6,
  },
  {
    id: 2,
    key: 'country',
    label: 'Country',
    options: ['United States of America', 'Canada', 'Canada'],
    size: 6,
  },
  {
    id: 4,
    key: 'product',
    label: 'Product',
    options: ['All', 'Dicamba', 'Glyphosate', 'Other'],
    size: 6,
  },
  {
    id: 5,
    key: 'brand',
    label: 'Brand',
    options: ['All', 'Dicamba', 'Glyphosate', 'Other'],
    size: 6,
  },
];

const makeMenuItems = (items) =>
  items.map((item) => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

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

const pricePlanSummary = [
  {
    mediumBreak: 4,
    primary: 'Market Year',
    secondary: '2020',
  },
  {
    mediumBreak: 4,
    primary: 'Status',
    secondary: 'Draft',
  },
  {
    mediumBreak: 4,
    primary: 'Version',
    secondary: '1.1',
  },
];

const pricePlanSummaryEditable = [
  {
    mediumBreak: 4,
    label: 'Currency',
    options: ['Currency 1', 'Currency 2', 'Currency 3', 'Currency 4'],
  },
];

const startEndDates = [
  {
    id: 1,
    mediumBreak: 4,
    label: 'Start Communication Date',
  },
  {
    id: 2,
    mediumBreak: 4,
    label: 'End Communication Date',
  },
];

export default function TowerReviewPricePlan() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-02-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Grid container spacing={3}>
        {pricePlanSummary.map(({mediumBreak, primary, secondary}, i) => (
          <Grid key={i} item xs={12} md={mediumBreak}>
            <ListItem divider>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          </Grid>
        ))}
        {pricePlanSummaryEditable.map(({label, mediumBreak, options}, i) => (
          <Grid key={i} item xs={12} md={mediumBreak}>
            <FormControl fullWidth={true} variant="outlined">
              <InputLabel>{label}</InputLabel>
              <Select
                MenuProps={menuProps}
                value={age}
                onChange={handleChange}
                label={label}
              >
                {makeMenuItems(options)}
              </Select>
            </FormControl>
          </Grid>
        ))}
        {startEndDates.map(({mediumBreak, label, id}) => (
          <Grid key={id} item xs={12} md={mediumBreak}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                fullWidth={true}
                inputVariant="outlined"
                format="MM/dd/yyyy"
                label={label}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        ))}
        <Grid item xs={12}>
          <CardHeader title={<Typography variant="h5">Scope</Typography>} />
          <Divider />
        </Grid>
        {inputs.map(({label, options, size, id}) => (
          <Grid key={id} item xs={12} md={size}>
            <FormControl fullWidth={true} variant="outlined">
              <InputLabel>{label}</InputLabel>
              <Select
                MenuProps={menuProps}
                defaultValue={options[0]}
                label={label}
              >
                {makeMenuItems(options)}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
