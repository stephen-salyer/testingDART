import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ComponentInformationMarketing from './ComponentInformationMarketing';
import ComponentInformationFinance from './ComponentInformationFinance';
import ComponentInformationOperations from './ComponentInformationOperations';
import {Hidden, Divider} from '@material-ui/core';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box pt={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ComponentInformation() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        style={{backgroundColor: '#ffffff'}}
      >
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Marketing" {...a11yProps(0)} />
            <Tab label="Financials" {...a11yProps(1)} />
            <Tab label="Operations" {...a11yProps(2)} />
          </Tabs>
          <Divider />
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            aria-label="full width tabs example"
          >
            <Tab label="Marketing" {...a11yProps(0)} />
            <Tab label="Financials" {...a11yProps(1)} />
            <Tab label="Operations" {...a11yProps(2)} />
          </Tabs>
          <Divider />
        </Hidden>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <ComponentInformationMarketing />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ComponentInformationFinance />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <ComponentInformationOperations />
      </TabPanel>
    </>
  );
}
