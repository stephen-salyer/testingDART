import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
  CardHeader,
  Divider,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    paddingTop: '16px',
  },
  indicator: {
    backgroundColor: '#142357',
  },
  listItemTertiary: {
    marginTop: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextNoMargin: {
    marginBottom: '0',
  },
  tabs: {
    minWidth: '250px',
  },
  MuiTab: {
    wrapper: {
      alignItems: 'start',
    },
  },
}));

const components = ['Canola', 'Corn', 'Soybean', 'Alfalfa', 'Crop Here'];

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      style={{width: '100%'}}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box pl={3}>{children}</Box>}
    </Typography>
  );
}

export default function Components() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            classes={{
              indicator: classes.indicator,
            }}
          >
            {components.map((components) => (
              <Tab
                style={{textAlign: 'left'}}
                key={components}
                label={
                  <List style={{minWidth: '100%'}}>
                    <ListItemText
                      className={classes.listItemTextNoMargin}
                      primary={
                        <Typography variant="subtitle1">
                          {components}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          style={{
                            marginTop: '0',
                            fontWeight: '400',
                            color: 'rgba(0, 0, 0, 0.54)',
                            fontSize: '0.875rem',
                          }}
                        >
                          {'TED: ' +
                            (
                              5e6 +
                              Math.floor(Math.random() * 10) * 482759
                            ).toLocaleString()}
                        </Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <MoreVertIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </List>
                }
              />
            ))}
          </Tabs>
          {components.map(({component}, i) => (
            <TabPanel value={value} key={component} index={i}>
              <Grid container>
                <Grid item xs={12}>
                  <CardHeader
                    titleTypographyProps={{variant: 'h6'}}
                    title={'Component - ' + {component}}
                  />
                  <Divider />
                </Grid>
              </Grid>
            </TabPanel>
          ))}
        </div>
      </Grid>
    </>
  );
}
