import React from 'react';
import {
  Divider,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
  List,
  Grid,
  FormControlLabel,
  Checkbox,
  ListItem,
  TextField,
  Button,
} from '@material-ui/core';
import {RemoveCircle} from '@material-ui/icons/';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const filters = [
//   {
//     title: 'Product Name',
//   },
//   {
//     title: 'Brand',
//   },
//   {
//     title: 'Lifecycle',
//   },
//   {
//     title: 'Trait Code',
//   },
//   {
//     title: 'Relative Maturity',
//   },
//   {
//     title: 'Base PCM',
//   },
//   {
//     title: 'Launch Year',
//   },
// ];

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

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Divider />
          {children}
        </Box>
      )}
    </Typography>
  );
}

export default function ProductEligibilityMaterialModalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    checkedA: false,
  });
  const handleChangeChecked = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <AppBar
        color="default"
        elevation={0}
        style={{backgroundColor: '#ffffff'}}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <Tab label="Find Materials" />
          <Tab label="Selected Materials (23)" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid
            item
            md={7}
            style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
          >
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
            <List style={{maxHeight: '70vh', overflow: 'scroll', padding: 0}}>
              {products.map(
                (
                  {
                    productName,
                    traitCode,
                    brand,
                    relativeMaturity,
                    lifeCycle,
                    launchYear,
                  },
                  i
                ) => (
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
              )}
            </List>
          </Grid>
          <Grid item md={5}>
            <Box p={2}>
              <Box pb={2}>
                <Autocomplete
                  options={products}
                  getOptionLabel={(option) => option.productName}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search Materials"
                      variant="outlined"
                    />
                  )}
                />
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button color="primary">Clear Filters</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          display="flex"
          justifyContent="center"
          style={{maxHeight: '76vh', overflow: 'scroll'}}
        >
          <List style={{width: '100%'}}>
            {products.map(
              (
                {
                  productName,
                  traitCode,
                  brand,
                  relativeMaturity,
                  lifeCycle,
                  launchYear,
                },
                i
              ) => (
                <Box key={i}>
                  <ListItem>
                    <ListItemText
                      primary={[productName, brand].join(' • ')}
                      secondary={[
                        traitCode,
                        relativeMaturity,
                        lifeCycle,
                        launchYear,
                      ].join(' • ')}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <RemoveCircle />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </Box>
              )
            )}
          </List>
        </Box>
      </TabPanel>
    </>
  );
}
