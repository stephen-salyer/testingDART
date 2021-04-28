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
  Tabs,
  Tab,
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

const productsSelected = [
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

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomerEligibilityInformation() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedD: true,
  });
  const handleChangeChecked = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const [accountClassification, setAccountClassification] = React.useState('');

  const handleChange = (event) => {
    setAccountClassification(event.target.value);
  };

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          md={7}
          style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
        >
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleChangeTabs}
            aria-label="simple tabs example"
          >
            <Tab label="Results" {...a11yProps(0)} />
            <Tab label="Selected" {...a11yProps(1)} />
          </Tabs>
          <Divider />
          <TabPanel value={value} index={0}>
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
            <List style={{height: '50vh', overflow: 'scroll', padding: 0}}>
              <Divider />
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            <List style={{height: '56vh', overflow: 'scroll', padding: 0}}>
              {productsSelected.map(
                ({name, operationalAccountID, accountClassification}, i) => (
                  <Box key={i}>
                    <ListItem>
                      <FormControlLabel
                        control={
                          <Box pl={1} pr={0} pt={0} pb={0}>
                            <Checkbox
                              color="primary"
                              name="checkedD"
                              defaultChecked
                            />
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
          </TabPanel>
          <Divider />
        </Grid>
        <Grid item md={5}>
          <Box pt={2} pr={2} pl={2}>
            <Typography variant="h6">Filters</Typography>
          </Box>
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
