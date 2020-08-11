import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Box, Divider, Button, Typography} from '@material-ui/core';
import ProfitsandLoses from './ProfitsandLoses';
import {Add} from '@material-ui/icons';

export default function ComponentInformationFinance() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Typography variant="h6">Profits and Loses</Typography>
            <Button color="primary" endIcon={<Add />}>
              Add P&L
            </Button>
          </Box>
          <Divider />
          <ProfitsandLoses />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            disabled
            label="Total Expected Discount (based on above Profit and Loses)"
            defaultValue="1,234,567 USD"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
