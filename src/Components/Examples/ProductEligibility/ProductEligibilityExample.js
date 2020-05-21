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
  Container,
  TextField,
} from '@material-ui/core';
import ProductEligibilityProduct from './ProductEligibilityProduct';
import ProductEligibilityBrands from './ProductEligibilityBrands';
import ProductEligibilityMaterials from './ProductEligibilityMaterials';

export default function ProductEligibilityExample() {
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
      <Container maxWidth="md" style={{paddingTop: '85px'}}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <CardHeader
              titleTypographyProps={{variant: 'h6'}}
              title="Product Eligibility"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Which Products</InputLabel>
              <Select label="Which Products" defaultValue={20}>
                <MenuItem value={10}>All Products</MenuItem>
                <MenuItem value={20}>Some Products</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12} md={6}>
            <FormControl multiple fullWidth variant="outlined">
              <InputLabel>Products</InputLabel>
              <Select label="Products">
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
          <Grid item sm={12} md={4}>
            <FormControl multiple fullWidth variant="outlined">
              <InputLabel>Brands</InputLabel>
              <Select label="Brands">
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
          <Grid item sm={12} md={4}>
            <FormControl multiple fullWidth variant="outlined">
              <InputLabel>Materials</InputLabel>
              <Select label="Materials">
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
            <ProductEligibilityMaterials />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Sub-Materials"
              multiline
              placeholder="Example of format we want them in (seperate by comma)"
              rows="8"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
