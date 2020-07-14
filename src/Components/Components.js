import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  ListItemText,
  List,
  IconButton,
  CardHeader,
  Divider,
  Button,
  Menu,
  MenuItem,
  Tooltip,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ComponentInformation from './ComponentInformation';
import {Add} from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteComponentModal from './DeleteComponentModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
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
    minWidth: '280px',
  },
  MuiTab: {
    wrapper: {
      alignItems: 'start',
    },
  },
}));

export const componentsInfo = [
  {
    comp: 'Canola',
    ted: '$1,234,345',
  },
  {
    comp: 'Corn',
    ted: '$1,432,345',
  },
  {
    comp: 'Soybean',
    ted: '$6,232,348',
  },
  {
    comp: '2019 Pack 72-10 MGRR & 71-10 VT3P DK Arg',
    ted: '$3,444,335',
  },
  {
    comp: 'Crop Here',
    ted: '$2,222,777',
  },
];

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container>
        <div className={classes.root}>
          <Box
            className={classes.tabs}
            style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
          >
            <Box display="flex" flexDirection="column">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                indicatorColor="primary"
                className={classes.tabs}
              >
                {componentsInfo.map(({comp, ted}, i) => (
                  <Tab
                    style={{textAlign: 'left'}}
                    key={i}
                    label={
                      <List style={{width: '100%'}}>
                        <ListItemText
                          className={classes.listItemTextNoMargin}
                          primary={
                            <Tooltip
                              title={
                                <Typography variant="overline">
                                  {comp}
                                </Typography>
                              }
                            >
                              <Typography
                                noWrap
                                variant="subtitle1"
                                style={{fontWeight: 500}}
                              >
                                {comp}
                              </Typography>
                            </Tooltip>
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
                              TED: {ted}
                            </Typography>
                          }
                        />
                      </List>
                    }
                  />
                ))}
                <Box display="flex" justifyContent="center">
                  <Button endIcon={<Add />}>Add Component</Button>
                </Box>
              </Tabs>
            </Box>
          </Box>
          {componentsInfo.map(({comp}, i) => (
            <TabPanel value={value} key={comp} index={i}>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <CardHeader
                      title={
                        <>
                          <Box display="flex" alignItems="center">
                            <Typography variant="h5">
                              Component - {comp}
                            </Typography>
                          </Box>
                        </>
                      }
                    />
                    <Box>
                      <IconButton
                        onClick={handleClick}
                        aria-label="More"
                        component="span"
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Copy</MenuItem>
                        <MenuItem onClick={handleClose}>
                          <DeleteComponentModal />
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Box>
                  <Divider />
                  <ComponentInformation />
                </Grid>
              </Grid>
            </TabPanel>
          ))}
        </div>
      </Grid>
    </>
  );
}
