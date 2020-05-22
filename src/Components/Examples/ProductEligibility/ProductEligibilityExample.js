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
  Container,
  TextField,
  Button,
  ListItemText,
} from '@material-ui/core';
import ProductEligibilityProduct from './ProductEligibilityProduct';
import ProductEligibilityBrands from './ProductEligibilityBrands';
import ProductEligibilityMaterials from './ProductEligibilityMaterials';
import {Add} from '@material-ui/icons';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const brandNames = [
  {product: 'Product1', brand: 'Brand1'},
  {product: 'Product2', brand: 'Brand2'},
  {product: 'Product3', brand: 'Brand3'},
  {product: 'Product4', brand: 'Brand4'},
  {product: 'Product5', brand: 'Brand5'},
  {product: 'Product6', brand: 'Brand6'},
  {product: 'Product7', brand: 'Brand7'},
  {product: 'Product8', brand: 'Brand8'},
];

const materialNames = [
  {material: 'Material1', productBrand: 'Product1 • Brand1'},
  {material: 'Material2', productBrand: 'Product2 • Brand2'},
  {material: 'Material3', productBrand: 'Product3 • Brand3'},
  {material: 'Material4', productBrand: 'Product4 • Brand4'},
  {material: 'Material5', productBrand: 'Product5 • Brand5'},
  {material: 'Material6', productBrand: 'Product6 • Brand6'},
  {material: 'Material7', productBrand: 'Product7 • Brand7'},
  {material: 'Material8', productBrand: 'Product8 • Brand8'},
];

export default function ProductEligibilityExample() {
  const [personName, setPersonName] = React.useState([]);
  const [materialName, setMaterialName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChange2 = (event) => {
    setMaterialName(event.target.value);
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
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="demo-simple-select-outlined-label">
                Brand
              </InputLabel>
              <Select
                multiple
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={personName}
                onChange={handleChange}
                label="Brand"
                MenuProps={MenuProps}
                renderValue={(selected) => selected.join(', ')}
              >
                {brandNames.map(({product, brand}) => (
                  <MenuItem key={product} value={brand}>
                    <Checkbox checked={personName.includes(brand)} />
                    <ListItemText primary={brand} secondary={product} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <ProductEligibilityBrands />
          </Grid>
          <Grid item sm={12} md={4}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel id="demo-simple-select-outlined-label">
                Materials
              </InputLabel>
              <Select
                multiple
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={materialName}
                onChange={handleChange2}
                label="Materials"
                MenuProps={MenuProps}
                renderValue={(selected) => selected.join(', ')}
              >
                {materialNames.map(({material, productBrand}) => (
                  <MenuItem key={material} value={material}>
                    <Checkbox checked={materialName.includes(material)} />
                    <ListItemText primary={material} secondary={productBrand} />
                  </MenuItem>
                ))}
                <Box display="flex" justifyContent="center" p={1}>
                  <Button color="primary" endIcon={<Add />}>
                    Add Custom Material
                  </Button>
                </Box>
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
