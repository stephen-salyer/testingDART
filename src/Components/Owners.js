import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {
  Grid,
  Checkbox,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  FormControlLabel,
  Switch,
  List,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const names = [
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

export default function CustomizedSelects() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChangeToggle = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Add Marketing Owner
            </InputLabel>
            <Select
              multiple
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={personName}
              onChange={handleChange}
              label="Add Marketing Owner"
              MenuProps={MenuProps}
              renderValue={(selected) => selected.join(', ')}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {[1, 2, 3].map((n) => (
            <Fragment key={n}>
              <List>
                <ListItem>
                  <FormControlLabel
                    style={{margin: '0 16px 0 0'}}
                    value={<Typography variant="caption">Not Done</Typography>}
                    control={<Switch color="primary" />}
                    label={<Typography variant="caption">Not Done</Typography>}
                    labelPlacement="top"
                  />
                  <ListItemText primary="Last Name" secondary="First Name" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircleIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Fragment>
          ))}
        </Grid>
        <Grid item xs={4}>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Add Operations Owner
            </InputLabel>
            <Select
              multiple
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={personName}
              onChange={handleChange}
              label="Add Marketing Owner"
              MenuProps={MenuProps}
              renderValue={(selected) => selected.join(', ')}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {[1, 2, 3].map((n) => (
            <Fragment key={n}>
              <List>
                <ListItem>
                  <FormControlLabel
                    style={{margin: '0 16px 0 0'}}
                    value={<Typography variant="caption">Done</Typography>}
                    control={<Switch color="primary" />}
                    checked={state.checkedA}
                    onChange={handleChangeToggle}
                    label={<Typography variant="caption">Done</Typography>}
                    labelPlacement="top"
                  />
                  <ListItemText primary="Last Name" secondary="First Name" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircleIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Fragment>
          ))}
        </Grid>
        <Grid item xs={4}>
          <FormControl
            variant="outlined"
            fullWidth={true}
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Add Finance Owner
            </InputLabel>
            <Select
              multiple
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={personName}
              onChange={handleChange}
              label="Add Marketing Owner"
              MenuProps={MenuProps}
              renderValue={(selected) => selected.join(', ')}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {[1, 2, 3].map((n) => (
            <Fragment key={n}>
              <List>
                <ListItem>
                  <FormControlLabel
                    style={{margin: '0 16px 0 0'}}
                    value={<Typography variant="caption">Not Done</Typography>}
                    control={<Switch color="primary" />}
                    label={<Typography variant="caption">Not Done</Typography>}
                    labelPlacement="top"
                  />
                  <ListItemText primary="Last Name" secondary="First Name" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <RemoveCircleIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
