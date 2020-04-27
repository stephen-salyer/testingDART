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
} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

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
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

export default function GeographyEligibilityCountry() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label="Included (1)" />
          <Tab disabled label="Excluded (0)" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box style={{maxHeight: '260px', overflow: 'scroll'}}>
          <List>
            <Box p={1}>
              <ListItemText primary="United States of America" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <RemoveCircleIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Box>
          </List>
          <Divider />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </>
  );
}
