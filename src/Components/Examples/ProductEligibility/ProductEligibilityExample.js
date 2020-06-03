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
  ListItemText,
} from '@material-ui/core';
import ProductEligibilityProduct from './ProductEligibilityProduct';
import ProductEligibilityBrands from './ProductEligibilityBrands';
import ProductEligibilityMaterials from './ProductEligibilityMaterials';

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
  {
    materialBrand: 'DKB230PR03 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR04 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR05 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR06 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR07 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR08 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR09 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
  {
    materialBrand: 'DKB230PR00 • DEKALB',
    subInfo: 'NS5031MGKZ • VT2P / DG',
  },
];

export default function ProductEligibilityExample() {
  const [personName, setPersonName] = React.useState([]);
  const [materialName, setMaterialName] = React.useState([]);
  const [products, setProducts] = React.useState(10);
  const some = products === 20;
  const someOther = products === 30;

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChange2 = (event) => {
    setMaterialName(event.target.value);
  };

  const handleChange3 = (event) => {
    setProducts(event.target.value);
  };

  return (
    <>
      <Container maxWidth="md" style={{paddingTop: '85px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardHeader
              titleTypographyProps={{variant: 'h6'}}
              title="Product Eligibility"
            />
          </Grid>
          <Grid item xs={12} md={some || someOther ? 6 : 12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Which Products</InputLabel>
              <Select
                MenuProps={MenuProps}
                label="Which Products"
                onChange={handleChange3}
              >
                <MenuItem value={10}>All Products</MenuItem>
                <MenuItem value={20}>Some Products</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {some && (
            <>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={4}>
                <FormControl variant="outlined" fullWidth={true}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    MenuProps={MenuProps}
                    multiple
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={personName}
                    onChange={handleChange}
                    label="Brand"
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
              <Grid item xs={12} md={4}>
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
                    {materialNames.map(({materialBrand, subInfo}) => (
                      <MenuItem key={materialBrand} value={materialBrand}>
                        <Checkbox
                          checked={materialName.includes(materialBrand)}
                        />
                        <ListItemText
                          primary={materialBrand}
                          secondary={subInfo}
                        />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <ProductEligibilityMaterials />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Add Missing Materials"
                  multiline
                  placeholder="Materials Format (seperate with commas)"
                  variant="outlined"
                  helperText="Missing Materials: Brand 123456, 2344567, 2344567, 35465678, 3455467"
                />
              </Grid>
            </>
          )}
          {someOther && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Undefined Products Here"
                multiline
                rows={4}
                placeholder="Product format here (seperated by comma)"
                variant="outlined"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
