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
  FormHelperText,
} from '@material-ui/core';
// import ProductEligibilityNoFiltersSelected from './ProductEligibilityNoFiltersSelected';

const products = [
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
  {
    name: 'First Name Last Name',
    operationalAccountID: 'Operational Account ID',
    accountClassification: 'Account Classification',
  },
];

export default function CustomerEligibilityInformation() {
  const [state, setState] = React.useState({
    checkedA: false,
  });
  const handleChangeChecked = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const [accountClassification, setAccountClassification] = React.useState('');

  const handleChange = (event) => {
    setAccountClassification(event.target.value);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          md={7}
          style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
        >
          <Box ml={3} mr={3} mt={1.4} mb={1.4}>
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
            {products.map(
              ({name, operationalAccountID, accountClassification}, i) => (
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
                          primary={name}
                          secondary={[
                            operationalAccountID,
                            accountClassification,
                          ].join(' • ')}
                        />
                      }
                    />
                  </ListItem>
                  <Divider />
                </Box>
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
              <TextField fullWidth label="Name" variant="outlined" />
            </Box>
            <Box pb={2}>
              <TextField
                fullWidth
                label="Operational Account ID"
                variant="outlined"
              />
            </Box>
            <Box pb={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Account Classification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={accountClassification}
                  onChange={handleChange}
                  label="Account Classification"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Option 1</MenuItem>
                  <MenuItem value={20}>Option 2</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
                <FormHelperText>
                  Must Choose Name or Operational Account ID
                </FormHelperText>
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
