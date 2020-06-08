import React from 'react';
import {
  CardHeader,
  Checkbox,
  ListItemText,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  FormControlLabel,
} from '@material-ui/core';
import GeographyEligibilityCountry from './GeographyEligibilityCountry';
import GeographyEligibilityState from './GeographyEligibilityState';
import GeographyEligibilityCounty from './GeographyEligibilityCounty';

export default function GeographyEligibility() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

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

  return (
    <>
      <Grid item sm={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Geography Eligibility"
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Geographies</InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Which Geographies"
            defaultValue={20}
          >
            <MenuItem value={10}>All Geographies</MenuItem>
            <MenuItem value={20}>Some Geographies</MenuItem>
            <MenuItem value={30}>Some Sales Regions</MenuItem>
            <MenuItem value={40}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={12} md={6}>
        <FormControl multiple fullWidth variant="outlined">
          <InputLabel>Country</InputLabel>
          <Select MenuProps={MenuProps} label="Country">
            <Box
              pt={8}
              pb={8}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress color="secondary" />
              <Box p={3}>
                <Typography>
                  Grab some coffee. Its gonna be a minute...
                </Typography>
              </Box>
            </Box>
          </Select>
        </FormControl>
        <GeographyEligibilityCountry />
      </Grid>
      <Grid item sm={12} md={6}>
        <GeographyEligibilityState />
      </Grid>
      <Grid item sm={12} md={6}>
        <FormControl multiple fullWidth variant="outlined">
          <InputLabel>Counties / Disctricts / Ect.</InputLabel>
          <Select MenuProps={MenuProps} label="Counties / Disctricts / Ect.">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Box pl={2} key={n}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                      value={10}
                    />
                  }
                  label={
                    <ListItemText
                      primary="County Name"
                      secondary="Country Name • State Name"
                    />
                  }
                />
              </Box>
            ))}
          </Select>
        </FormControl>
        <GeographyEligibilityCounty />
      </Grid>
    </>
  );
}
