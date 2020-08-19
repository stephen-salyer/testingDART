import React from 'react';
import {
  Divider,
  CardHeader,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import CustomerEligibilityGroupsAutoComplete from './CustomerEligibilityGroupsAutoComplete';
import SpecificCustomerAutoComplete from './SpecificCustomerAutoComplete';

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

export default function CustomerEligibility() {
  const [customer, setAccounts] = React.useState(10);
  const someAccounts = customer === 20;
  const other = customer === 30;

  const handleChange1 = (event) => {
    setAccounts(event.target.value);
  };

  return (
    <>
      <Grid item xs={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Customer Eligibility"
        />
        <Divider />
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Customers</InputLabel>
          <Select
            MenuProps={MenuProps}
            onChange={handleChange1}
            label="Which Customers"
          >
            <MenuItem value={10}>All Customer</MenuItem>
            <MenuItem value={20}>Some Customers</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {someAccounts && (
        <>
          <Grid item xs={12} md={6}>
            <SpecificCustomerAutoComplete />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Segment</InputLabel>
              <Select MenuProps={MenuProps} label="Segment" defaultValue={20}>
                <MenuItem value={10}>NEED SELECTIONS</MenuItem>
                <MenuItem value={20}>NEED SELECTIONS</MenuItem>
                <MenuItem value={30}>NEED SELECTIONS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomerEligibilityGroupsAutoComplete />
          </Grid>
        </>
      )}
      {other && (
        <>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Undefined Customers Here"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </>
      )}
    </>
  );
}
