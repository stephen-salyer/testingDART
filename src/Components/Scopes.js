import React, {Fragment} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import DeleteScopeModal from './DeleteScopeModal';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
}));

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 64,
    '&$expanded': {
      minHeight: 72,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiExpansionPanelDetails);

/* 
EXAMPLE

const links = [
  {label: 'Program List', to: '/program-list'},
  {label: 'Tower Review', to: '/tower-review'},
  {label: 'Member List', to: '/member-list'},
  {label: 'View Reports', to: '/reports'},
];

const Nav = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(true)} className={classes.colorChange} />
      <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)} color="inherit">
            <Close />
          </IconButton>
        </Box>

        <div className={classes.list}>
          <List component="nav" aria-label="main mailbox folders">
            {links.map(({label, to}) => (
              <Link to={to} className={classes.linkNoDecoration} key={label}>
                <ListItem button>
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}; */

const typographyTitles = [
  {title: 'North America • US • Crop Protection • Glyphosate • All'},
  {title: 'North America • US • Crop Protection • Glyphosate • Roundup'},
  {
    title: 'North America • US • Crop Protection • Glyphosate • Degree Xtra',
  },
  {
    title: 'North America • US • Crop Protection • Dicamba • Roundup Xtend',
  },
];

const expandedOnChange = [
  {panel: 'panel1'},
  {panel: 'panel2'},
  {panel: 'panel3'},
  {panel: 'panel4'},
];

const menuItemsValues = [
    {value: '10', type: 'australia'},
    {value: '20', type: 'North America'},
    {value: '30', type: 'South America'},
];

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {[1, 2, 3, 4].map((n) => (
        <Fragment key={n}>
          {expandedOnChange.map(({panel}) => (
          <ExpansionPanel
          key={panel}
            square
            expanded={expanded === {panel}}
            onChange={handleChange({panel})}
          >
            ))}
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              {typographyTitles.map(({title}) => (
                <Typography key={title}></Typography>
              ))}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Region</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={20}
                        label="Region"
                      >
                        <MenuItem value={10}>Australia</MenuItem>
                        <MenuItem value={20}>North America</MenuItem>
                        <MenuItem value={30}>South America</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={30}
                        label="Country"
                      >
                        <MenuItem value={10}>Canada</MenuItem>
                        <MenuItem value={20}>Brazil</MenuItem>
                        <MenuItem value={30}>United States of America</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Business Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={20}
                        label="Business Category"
                      >
                        <MenuItem value={10}>all</MenuItem>
                        <MenuItem value={20}>Crop Protection</MenuItem>
                        <MenuItem value={30}>Pasture</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Product
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={20}
                        label="Product"
                      >
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Glyphosate</MenuItem>
                        <MenuItem value={30}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Brand
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        defaultValue={10}
                        label="Brand"
                      >
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Asgrow</MenuItem>
                        <MenuItem value={30}>BioAg</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            </ExpansionPanelDetails>
            <Box pl={3} pr={3}>
              <DeleteScopeModal />
            </Box>
          </ExpansionPanel>
        </Fragment>
      ))}
      <ExpansionPanel
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>
            North America • US • Crop Protection • Glyphosate • Roundup
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Region"
                  >
                    <MenuItem value={10}>Australia</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Country"
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>Brazil</MenuItem>
                    <MenuItem value={30}>United States of America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Business Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Business Category"
                  >
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>Crop Protection</MenuItem>
                    <MenuItem value={30}>Pasture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Product"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Glyphosate</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Brand"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Asgrow</MenuItem>
                    <MenuItem value={30}>Roundup</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <Box pl={3} pr={3}>
          <DeleteScopeModal />
        </Box>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>
            North America • US • Crop Protection • Glyphosate • Degree Xtra
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Region"
                  >
                    <MenuItem value={10}>Australia</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Country"
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>Brazil</MenuItem>
                    <MenuItem value={30}>United States of America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Business Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Business Category"
                  >
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>Crop Protection</MenuItem>
                    <MenuItem value={30}>Pasture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Product"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Acetanilide</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Brand"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Asgrow</MenuItem>
                    <MenuItem value={30}>Degree Xtra</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <Box pl={3} pr={3}>
          <DeleteScopeModal />
        </Box>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography>
            North America • US • Crop Protection • Dicamba • Roundup Xtend
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Region
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Region"
                  >
                    <MenuItem value={10}>Australia</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Country"
                  >
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>Brazil</MenuItem>
                    <MenuItem value={30}>United States of America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Business Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={20}
                    label="Business Category"
                  >
                    <MenuItem value={10}>all</MenuItem>
                    <MenuItem value={20}>Crop Protection</MenuItem>
                    <MenuItem value={30}>Pasture</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Product
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Product"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Acetanilide</MenuItem>
                    <MenuItem value={30}>Dicamba</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Brand
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={30}
                    label="Brand"
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Asgrow</MenuItem>
                    <MenuItem value={30}>Roundup Xtend</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <Box pl={3} pr={3}>
          <DeleteScopeModal />
        </Box>
      </ExpansionPanel>
    </>
  );
}
