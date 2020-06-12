import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ApproverNonDOADetails from './ApproverNonDOADetails';

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
      {value === index && <Box pt={1}>{children}</Box>}
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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ApproverNonDOA() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        style={{backgroundColor: '#ffffff'}}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="full width tabs example"
        >
          <Tab
            label={
              <>
                <Box display="flex" alignItems="flex-end">
                  <Typography variant="inherit">Operations</Typography>
                  <Typography
                    style={{paddingLeft: 8, paddingBottom: 1}}
                    color="textSecondary"
                    variant="caption"
                  >
                    Commercial Org.
                  </Typography>
                </Box>
              </>
            }
            {...a11yProps(0)}
          />
          <Tab label="Legals" {...a11yProps(1)} />
          <Tab label="Sales" {...a11yProps(2)} />
          <Tab label="Marketing" {...a11yProps(3)} />
          <Tab label="Additional" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box pt={3}>
          <ApproverNonDOADetails />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box pt={3}>
          <ApproverNonDOADetails />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box pt={3}>
          <ApproverNonDOADetails />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Box pt={3}>
          <ApproverNonDOADetails />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <Box pt={3}>
          <ApproverNonDOADetails />
        </Box>
      </TabPanel>
    </div>
  );
}
