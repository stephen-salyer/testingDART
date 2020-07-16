import React from 'react';
import {
  CardHeader,
  Checkbox,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  FormControlLabel,
  Divider,
} from '@material-ui/core';
import ProductEligibilityProduct from './ProductEligibilityProduct';
import ProductEligibilityBrands from './ProductEligibilityBrands';
import ProductEligibilityMaterials from './ProductEligibilityMaterials';
import ProductSearchModal from '../ProductSearchModal';

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

export default function ProductEligibility() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <Grid item sm={12}>
        <CardHeader
          titleTypographyProps={{variant: 'h6'}}
          title="Product Eligibility"
        />
        <Divider />
      </Grid>
      <Grid item sm={12} md={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Which Products</InputLabel>
          <Select
            MenuProps={MenuProps}
            label="Which Products"
            defaultValue={20}
          >
            <MenuItem value={10}>All Products</MenuItem>
            <MenuItem value={20}>Some Products</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={12} md={6}>
        <FormControl multiple fullWidth variant="outlined">
          <InputLabel>Products</InputLabel>
          <Select MenuProps={MenuProps} label="Products">
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
        <ProductEligibilityProduct />
      </Grid>
      <Grid item sm={12} md={6}>
        <FormControl multiple fullWidth variant="outlined">
          <InputLabel>Brands</InputLabel>
          <Select MenuProps={MenuProps} label="Brands">
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
                  label="State Name Here"
                />
              </Box>
            ))}
          </Select>
        </FormControl>
        <ProductEligibilityBrands />
      </Grid>
      <Grid item sm={12} md={6}>
        <ProductSearchModal />
        <ProductEligibilityMaterials />
      </Grid>
    </>
  );
}
