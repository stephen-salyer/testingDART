import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  ListItemText,
  List,
  CardHeader,
  Divider,
  FormControlLabel,
  Switch,
  TextField,
  ListItemSecondaryAction,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ApproverChart from './ApproverChart';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
    minWidth: '250px',
  },
  MuiTab: {
    wrapper: {
      alignItems: 'start',
    },
  },
});

const Members = [
  {title: 'Justice Madden'},
  {title: 'Alberto Shepard'},
  {title: 'Anahi Mayo'},
  {title: 'Mohamed Ferrell'},
  {title: 'Jaylin Mcneil'},
  {title: 'Caden Sosa'},
  {title: 'Monica Carroll'},
  {title: 'Leia Roach'},
  {title: 'Kayden Jordan'},
  {title: 'Billy Lester'},
  {title: 'Kinsley Christian'},
];

export const approvers = [
  {
    progress: 'Started',
    name: 'Justice Madden',
    wave: 'Wave 1',
    ted: '$1,000,000,000',
    year: '1 Year',
  },
  {
    progress: 'Not Started',
    name: 'Alberto Shepard',
    wave: 'Wave 1',
    ted: '$1,789,000,000',
    year: '1 Year',
  },
  {
    progress: 'Started',
    name: 'Anahi Mayo',
    wave: 'Wave 2',
    ted: '$1,456,000,000',
    year: '2 Year',
  },
  {
    progress: 'Started',
    name: 'Mohamed Ferrell',
    wave: 'Wave 2',
    ted: '$1,000,387,000',
    year: '1 Year',
  },
];

export const approverCategories = [
  {
    category: 'Global Accounting',
  },
  {
    category: 'Non-DOA',
  },
  {
    category: 'DOA',
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

export default function Approvers() {
  const classes = useStyles();
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
        <Grid item xs={12}>
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
        </Grid>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            indicatorColor="primary"
            className={classes.tabs}
          >
            {approverCategories.map(({category}, i) => (
              <Tab
                style={{textAlign: 'left'}}
                key={i}
                label={
                  <List style={{width: '100%'}}>
                    <ListItemText
                      className={classes.listItemTextNoMargin}
                      primary={
                        <Typography variant="subtitle1">{category}</Typography>
                      }
                    />
                  </List>
                }
              />
            ))}
          </Tabs>
          {approverCategories.map(({category}, i) => (
            <TabPanel value={value} key={category} index={i}>
              <Grid container spacing={3}>
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
                            <Typography variant="h5">{category}</Typography>
                          </Box>
                        </>
                      }
                    />
                  </Box>
                  <Divider />
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    options={Members}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Members"
                        variant="outlined"
                      />
                    )}
                  />
                  <Box style={{maxHeight: '365px', overflow: 'scroll'}}>
                    {approvers.map(({progress, name, wave, ted, year}, i) => (
                      <>
                        <List key={i}>
                          <ListItemText
                            className={classes.listItemTextNoMargin}
                            primary={
                              <Typography
                                variant="overline"
                                style={{lineHeight: '0px'}}
                              >
                                {progress}
                              </Typography>
                            }
                            secondary={
                              <Typography variant="subtitle1">
                                {name}
                              </Typography>
                            }
                          />
                          <ListItemText
                            classes={{primary: classes.listItemTertiary}}
                            primary={[wave, ted, year].join(' • ')}
                          />
                          <ListItemSecondaryAction>
                            <IconButton
                              onClick={handleClick}
                              aria-label="More"
                              component="span"
                              edge="end"
                            >
                              <MoreVertIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </List>

                        <Divider />
                      </>
                    ))}
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                      <MenuItem onClick={handleClose}>Remove Approver</MenuItem>
                    </Menu>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <CardHeader
                    style={{paddingTop: 7}}
                    title={
                      <>
                        <Box display="flex" alignItems="center">
                          <Typography variant="h6">Stats Here?</Typography>
                        </Box>
                      </>
                    }
                  />
                  <Divider />
                  <Box pt={1}>
                    <ApproverChart />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
          ))}
        </div>
      </Grid>
    </>
  );
}
