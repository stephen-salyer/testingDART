import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import OwnersToggle from './OwnersToggle';
import {
  Grid,
  Checkbox,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  List,
  Box,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const marketingNames = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
];

const selects = [
  'Add Marketing Owner',
  'Add Operations Owner',
  'Add Finance Owner',
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
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export default function CustomizedSelects() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <>
          {selects.map((selects) => (
            <Grid item xs={4} key={selects}>
              <FormControl
                variant="outlined"
                fullWidth={true}
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  {selects}
                </InputLabel>
                <Select
                  multiple
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={personName}
                  onChange={handleChange}
                  label={selects}
                  MenuProps={MenuProps}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {marketingNames.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.includes(name)} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                style={{maxHeight: '520px', overflow: 'scroll', paddingTop: 8}}
              >
                {marketingNames.map((n) => (
                  <Fragment key={n}>
                    <List style={{marginTop: '-8px'}}>
                      <ListItem>
                        <OwnersToggle />
                        <ListItemText
                          primary={n.split(' ')[1]}
                          secondary={n.split(' ')[0]}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <RemoveCircleIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </List>
                  </Fragment>
                ))}
              </Box>
            </Grid>
          ))}
        </>
      </Grid>
    </div>
  );
}
