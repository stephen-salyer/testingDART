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

export default function GeographyEligibilityState() {
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
          <Tab label="Included (324)" />
          <Tab label="Excluded (16,000)" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box style={{height: '255px', overflow: 'scroll'}}>
          {[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
          ].map((n) => (
            <>
              <List key={n}>
                <ListItemText
                  primary="County Name Here"
                  secondary="Country Name Here • State Name Here"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <RemoveCircleIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
              <Divider />
            </>
          ))}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box style={{height: '255px', overflow: 'scroll'}}>
          {[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
          ].map((n) => (
            <>
              <List key={n}>
                <ListItemText
                  primary="County Name Here"
                  secondary="Country Name Here • State Name Here"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <RemoveCircleIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
              <Divider />
            </>
          ))}
        </Box>
      </TabPanel>
    </>
  );
}
