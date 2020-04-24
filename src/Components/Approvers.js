import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  FormControlLabel,
  Checkbox,
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    minWidth: '200px',
  },
}));

const marketingNames = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const tabStuff = [
  {label: 'wave 1'},
  {label: 'wave 2'},
  {label: 'wave 3'},
  {label: 'wave 4'},
  {label: 'wave 5'},
  {label: 'wave 6'},
  {label: 'wave 7'},
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Approvers() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChangeCheckbox = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChangeCheckbox}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Email All At Once"
            />
          </Box>
        </Grid>

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
            {tabStuff.map(({label}, i) => (
              <Tab label={label} key={label} {...a11yProps(i)} />
            ))}
          </Tabs>
          {tabStuff.map(({label}, i) => (
            <TabPanel value={value} key={label} index={i}>
              <Grid container>
                <Grid item sm={12} md={6}>
                  <Autocomplete
                    freeSolo
                    options={marketingNames.map((n) => ({title: n}))}
                    getOptionLabel={(option) => option.title}
                    style={{width: '100%'}}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Add Approver"
                        variant="outlined"
                      />
                    )}
                  />
                  <Box maxHeight="360px" overflow="scroll">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <Fragment key={n}>
                        <List>
                          <ListItemText
                            className={classes.listItemTextNoMargin}
                            primary={
                              <Typography
                                variant="overline"
                                style={{lineHeight: '0px'}}
                              >
                                Not Started
                              </Typography>
                            }
                            secondary={
                              <Typography variant="subtitle1">
                                First Name Last Name
                              </Typography>
                            }
                          />
                          <ListItemText
                            classes={{primary: classes.listItemTertiary}}
                            primary={
                              'Wave 1 • External Reporting • $1,000,000 • 1 Year'
                            }
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <RemoveCircleIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </List>
                      </Fragment>
                    ))}
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Pie Here</Typography>
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
