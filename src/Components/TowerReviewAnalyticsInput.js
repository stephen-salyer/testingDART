import React from 'react';
import 'typeface-roboto';
import {Grid, TextField, CardHeader, Divider, Box} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TowerReviewAnalyticsChart4 from './TowerReviewAnalyticsChart4';
import TowerReviewAnalyticsChart5 from './TowerReviewAnalyticsChart5';

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
        <Grid item xs={12} md={6}>
          <CardHeader title="Gross to Net Waterfall"></CardHeader>
          <Divider />
          <Box pt={2} display="flex" flexDirection="column" alignItems="center">
            <TowerReviewAnalyticsChart4 />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHeader title="Gross to Net Year-Over-Year"></CardHeader>
          <Divider />
          <Box pt={2} display="flex" flexDirection="column" alignItems="center">
            <TowerReviewAnalyticsChart5 />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
