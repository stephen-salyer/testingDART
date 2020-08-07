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

const products = [
  {
    productName: 'DKB230PR03',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR04',
    brand: 'DEKALB',
    traitCode: 'NS5031NFSF',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR05',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR06',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR07',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR08',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR09',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR10',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR11',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR12',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
  {
    productName: 'DKB230PR13',
    brand: 'DEKALB',
    traitCode: 'NS5031MGKZ',
    relativeMaturity: 'VT2P / DG',
    lifeCycle: 'launch',
    launchYear: '2021',
  },
];

export default function ProductEligibilityMaterialModal() {
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
          <List style={{maxHeight: '50vh', overflow: 'scroll', padding: 0}}>
            {products.map(
              (
                {
                  productName,
                  brand,
                  relativeMaturity,
                  lifeCycle,
                  launchYear,
                  traitCode,
                },
                i
              ) => (
                relativeMaturity,
                lifeCycle,
                launchYear,
                (
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
                            primary={[productName, brand].join(' • ')}
                            secondary={[
                              traitCode,
                              relativeMaturity,
                              lifeCycle,
                              launchYear,
                            ].join(' • ')}
                          />
                        }
                      />
                    </ListItem>
                    <Divider />
                  </Box>
                )
              )
            )}
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
                  <MenuItem value={10}>Crop 1</MenuItem>
                  <MenuItem value={20}>Crop 2</MenuItem>
                  <MenuItem value={30}>Crop 3</MenuItem>
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
