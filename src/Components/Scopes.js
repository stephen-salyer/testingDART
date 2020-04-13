import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>
            North America • US • Crop Protection • Glyphosate • All
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
                    <MenuItem value={10}>Canada</MenuItem>
                    <MenuItem value={20}>North America</MenuItem>
                    <MenuItem value={30}>South America</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Market Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={10}
                    label="Market year"
                  >
                    <MenuItem value={10}>2020</MenuItem>
                    <MenuItem value={20}>2021</MenuItem>
                    <MenuItem value={30}>2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Market Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={10}
                    label="Market year"
                  >
                    <MenuItem value={10}>2020</MenuItem>
                    <MenuItem value={20}>2021</MenuItem>
                    <MenuItem value={30}>2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Market Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={10}
                    label="Market year"
                  >
                    <MenuItem value={10}>2020</MenuItem>
                    <MenuItem value={20}>2021</MenuItem>
                    <MenuItem value={30}>2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Market Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={10}
                    label="Market year"
                  >
                    <MenuItem value={10}>2020</MenuItem>
                    <MenuItem value={20}>2021</MenuItem>
                    <MenuItem value={30}>2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
          <Typography>Collapsible Group Item #2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
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
          <Typography>Collapsible Group Item #3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
