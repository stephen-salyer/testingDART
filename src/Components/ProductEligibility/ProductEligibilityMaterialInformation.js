import React from 'react';
import {
  Divider,
  Box,
  ListItemText,
  List,
  Grid,
  FormControlLabel,
  Checkbox,
  ListItem,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
// import ProductEligibilityNoFiltersSelected from './ProductEligibilityNoFiltersSelected';

const products = [
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
  {
    materialNumber: '12997701',
    brand: 'DEKALB',
    description: 'C DK DKB230PRO3 SAF PR2 80MPLAN BR',
    commercialName: 'DKB230PRO3',
    traitCode: 'SAF',
    crop: 'Corn',
  },
];

export default function ProductEligibilityMaterialInformation() {
  const [state, setState] = React.useState({
    checkedA: false,
  });
  const handleChangeChecked = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const [brand, setBrand] = React.useState('');

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  const [crop, setCrop] = React.useState('');

  const handleChangeCrop = (event) => {
    setCrop(event.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          md={7}
          style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
        >
          {/* no filters selected start */}
          {/* <ProductEligibilityNoFiltersSelected /> */}
          {/* no filters selected end */}
          <Box p={2}>
            <TextField
              fullWidth
              label="Search Materials Below"
              variant="outlined"
            />
          </Box>
          <Divider />
          <Box ml={3} mr={3} mt={1} mb={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChangeChecked}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Select All"
            />
          </Box>
          <Divider />
          <List style={{height: '50vh', overflow: 'scroll', padding: 0}}>
            {products.map(({materialNumber, description}, i) => (
              <Box key={i}>
                <ListItem>
                  <FormControlLabel
                    control={
                      <Box pl={1} pr={0} pt={0} pb={0}>
                        <Checkbox color="primary" name="checkedC" />
                      </Box>
                    }
                    label={
                      <ListItemText
                        primary={[materialNumber].join(' • ')}
                        secondary={[description].join(' • ')}
                      />
                    }
                  />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Grid>
        <Grid item md={5}>
          <Box p={2}>
            <Typography variant="h6">Filters</Typography>
          </Box>
          <Divider />
          <Box p={2}>
            <Box pb={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Brand
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={brand}
                  onChange={handleChange}
                  label="Brand"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Brand 1</MenuItem>
                  <MenuItem value={20}>Brand 2</MenuItem>
                  <MenuItem value={30}>Brand 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box pb={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Crop
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={crop}
                  onChange={handleChangeCrop}
                  label="Crop"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Corn</MenuItem>
                  <MenuItem value={20}>Cotton</MenuItem>
                  <MenuItem value={30}>Sorghum</MenuItem>
                  <MenuItem value={40}>Soybean</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box pb={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Trait Code
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={crop}
                  onChange={handleChangeCrop}
                  label="Trait Code"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Trait Code 1</MenuItem>
                  <MenuItem value={20}>Trait Code 2</MenuItem>
                  <MenuItem value={30}>Trait Code 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box pb={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Commercial Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={crop}
                  onChange={handleChangeCrop}
                  label="Commercial Name"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Commercial Name 1</MenuItem>
                  <MenuItem value={20}>Commercial Name 2</MenuItem>
                  <MenuItem value={30}>Commercial Name 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Box pr={2}>
                <Button color="primary">Clear</Button>
              </Box>
              <Button variant="outlined" color="primary">
                Filter
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
