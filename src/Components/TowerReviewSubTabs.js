import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TowerReviewPrograms from './TowerReviewPrograms';
import TowerReviewProgramsPending from './TowerReviewProgramsPending';

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
      {value === index && <Box>{children}</Box>}
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

export default function TowerReviewSubTabs() {
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
          variant="fullWidth"
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="full width tabs example"
        >
          <Tab label="Draft" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="Approved" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <TowerReviewPrograms />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <TowerReviewProgramsPending />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <TowerReviewPrograms />
      </TabPanel>
    </div>
  );
}
