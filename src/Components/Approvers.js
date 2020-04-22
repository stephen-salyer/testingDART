import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import {
  FormControl,
  Box,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  List,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

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
}));

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

const OperationNames = [
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Approvers() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [personName, setPersonName] = React.useState([]);

  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChangeName = (event) => {
    setPersonName(event.target.value);
  };

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
            <Tab label="Wave 1" {...a11yProps(0)} />
            <Tab label="Wave 2" {...a11yProps(1)} />
            <Tab label="Wave 3" {...a11yProps(2)} />
            <Tab label="Wave 4" {...a11yProps(3)} />
            <Tab label="Wave 5" {...a11yProps(4)} />
            <Tab label="Wave 6" {...a11yProps(5)} />
            <Tab label="Wave 7" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item sm={12} md={6}>
                <FormControl
                  variant="outlined"
                  fullWidth={true}
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Add Approver
                  </InputLabel>
                  <Select
                    multiple
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={personName}
                    onChange={handleChangeName}
                    label="Add Approver"
                    MenuProps={MenuProps}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {OperationNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography>Pie Here</Typography>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </div>
      </Grid>
    </>
  );
}
