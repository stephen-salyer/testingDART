import React from 'react';
import 'typeface-roboto';
import {Grid, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TowerReviewAnalyticsChart4 from './TowerReviewAnalyticsChart4';

const currencies = [
  {title: 'AED'},
  {title: 'AFN'},
  {title: 'USD'},
  {title: 'ALL'},
  {title: 'AMD'},
  {title: 'ANG'},
  {title: 'AOA'},
  {title: 'ARS'},
  {title: 'AUD'},
  {title: 'AWG'},
  {title: 'AZN'},
  {title: 'BAM'},
];

const textFields = [
  {
    mediumSize: 3,
    label: 'Total Gross Sales',
  },
  {
    mediumSize: 3,
    label: 'Gross to Net %',
  },
  {
    mediumSize: 3,
    label: 'Volume',
  },
];

export default function TowerReviewAnalyticsInput() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Autocomplete
            options={currencies}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(option) => (
              <React.Fragment>{option.title}</React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Currency"
                placeholder="Search"
              />
            )}
          />
        </Grid>
        {textFields.map(({label, mediumSize}, i) => (
          <Grid item key={i} xs={12} md={mediumSize}>
            <TextField fullWidth label={label} variant="outlined" />
          </Grid>
        ))}
        <Grid item xs={12}>
          <TowerReviewAnalyticsChart4 />
        </Grid>
      </Grid>
    </>
  );
}
