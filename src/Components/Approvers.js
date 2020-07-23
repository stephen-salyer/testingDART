import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  FormControlLabel,
  Switch,
  Box,
  Divider,
  Hidden,
} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ApproverNonDOA from './ApproverNonDOA';
import ApproverGlobalAccounting from './ApproverGlobalAccounting';
import ApproverDOA from './ApproverDOA';

export const approverCategories = [
  {
    category: 'Global Accounting',
    tabInformation: <ApproverGlobalAccounting />,
  },
  {
    category: 'Non-DOA',
    tabInformation: <ApproverNonDOA />,
  },
  {
    category: 'DOA',
    tabInformation: <ApproverDOA />,
  },
];

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Approvers() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeSwitch = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="flex-end"
            pl={3}
            pr={3}
            pt={1}
            pb={1}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={state.checkedB}
                  onChange={handleChangeSwitch}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Route Emails By Wave"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Hidden xsDown>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="primary"
              textColor="primary"
            >
              {approverCategories.map(({category}, i) => (
                <Tab style={{paddingLeft: 16}} key={i} label={category} />
              ))}
            </Tabs>
            <Divider />
          </Hidden>
          <Hidden only={['sm', 'md', 'lg', 'xl']}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              aria-label="full width tabs example"
            >
              {approverCategories.map(({category}, i) => (
                <Tab style={{paddingLeft: 16}} key={i} label={category} />
              ))}
            </Tabs>
            <Divider />
          </Hidden>
        </Grid>
        <Grid item xs={12}>
          {approverCategories.map(({category, tabInformation}, i) => (
            <TabPanel value={value} key={category} index={i}>
              {tabInformation}
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
