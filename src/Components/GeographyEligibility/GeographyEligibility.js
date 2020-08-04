import React from 'react';
import {
  CardHeader,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';
import GeographyEligibilityCountry from './GeographyEligibilityCountry';
import GeographyEligibilityState from './GeographyEligibilityState';
import GeographyEligibilityCounty from './GeographyEligibilityCounty';
import GeographyEligibilitySalesRegion from './GeographyEligibilitySalesRegion';
import GeographyEligibilitySalesTeams from './GeographyEligibilitySalesTeams';

export default function GeographyEligibility() {
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
  const [products, setProducts] = React.useState(10);
  const someGeographies = products === 20;
  const someSales = products === 30;
  const other = products === 40;

  const handleChange1 = (event) => {
    setProducts(event.target.value);
  };

  return (
    <>
      <Grid item xs={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Geography Eligibility"
        />
        <Divider />
      </Grid>
      <Grid item xs={12} md={someGeographies || other ? 6 : 6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Geographies</InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Which Geographies"
            onChange={handleChange1}
          >
            <MenuItem value={10}>All Geographies</MenuItem>
            <MenuItem value={20}>Some Geographies</MenuItem>
            <MenuItem value={30}>Some Sales Regions</MenuItem>
            <MenuItem value={40}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {someGeographies && (
        <>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <GeographyEligibilityState />
          </Grid>
          <Grid item xs={12} md={6}>
            <GeographyEligibilityCounty />
          </Grid>
        </>
      )}
      {someSales && (
        <>
          <Grid item xs={0} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Regions</InputLabel>
              <Select MenuProps={MenuProps} label="Regions">
                <MenuItem value={10}>OH / Northeast</MenuItem>
                <MenuItem value={20}>OH / Northwest</MenuItem>
                <MenuItem value={30}>OH / Northsouth</MenuItem>
                <MenuItem value={40}>OH / Northnorth</MenuItem>
              </Select>
            </FormControl>
            <GeographyEligibilitySalesRegion />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Teams</InputLabel>
              <Select MenuProps={MenuProps} label="Teams">
                <MenuItem value={10}>OH / Northeast ∙ N201</MenuItem>
                <MenuItem value={20}>OH / Northeast ∙ N202</MenuItem>
                <MenuItem value={30}>OH / Northeast ∙ N203</MenuItem>
                <MenuItem value={40}>OH / Northeast ∙ N204</MenuItem>
              </Select>
            </FormControl>
            <GeographyEligibilitySalesTeams />
          </Grid>
        </>
      )}
      {other && (
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            multiline
            id="outlined-multiline-static"
            label="Undefined Geographies Here"
            placeholder='Please use "Some Geographies" first, if that does not meet your geographic requirements type those requirements here.'
            rows={4}
            variant="outlined"
          />
        </Grid>
      )}
    </>
  );
}
