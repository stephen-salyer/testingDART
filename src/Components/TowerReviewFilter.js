import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {FilterList, ArrowDownward} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import CardHeader from '@material-ui/core/CardHeader';
import {Divider, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  list: {
    width: 350,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
  fullList: {
    width: 'auto',
  },
  chipOrganize: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chipPadding: {
    marginRight: '8px',
    marginBottom: '8px',
  },
  formControl: {
    width: '100%',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
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

const towers = [{title: '2020 / North America / US / Alfalfa / Channel'}];

export default function TowerReviewFilter() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <CardHeader title="Filter Towers"></CardHeader>
        <Box p={1}>
          <IconButton onClick={toggleDrawer(anchor, false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box p={2}>
        <Box pb={1}>
          <Typography variant="subtitle1">Years</Typography>
        </Box>
        <Chip
          onClick={handleClick}
          className={classes.chipPadding}
          label="2022"
        />
        <Chip
          onClick={handleClick}
          className={classes.chipPadding}
          label="2021"
        />
        <Chip
          className={classes.chipPadding}
          label="2020"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          onClick={handleClick}
          className={classes.chipPadding}
          label="2019"
        />
        <Chip
          onClick={handleClick}
          className={classes.chipPadding}
          label="2018"
        />
        <Chip
          onClick={handleClick}
          className={classes.chipPadding}
          label="2017"
        />
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Region</InputLabel>
          <Select
            MenuProps={menuProps}
            defaultValue={10}
            id="demo-simple-select-outlined"
            label="Region"
          >
            <MenuItem>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>North America</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Country
          </InputLabel>
          <Select
            MenuProps={menuProps}
            defaultValue={10}
            id="demo-simple-select-outlined"
            label="Country"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>US</MenuItem>
            <MenuItem value={20}>Canada</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Product
          </InputLabel>
          <Select
            MenuProps={menuProps}
            defaultValue={20}
            id="demo-simple-select-outlined"
            label="Product"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Alfalfa</MenuItem>
            <MenuItem value={30}>Acetanilide</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
          <Select
            MenuProps={menuProps}
            defaultValue={20}
            id="demo-simple-select-outlined"
            label="Brand"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Channel</MenuItem>
            <MenuItem value={30}>Absolute Maxx</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="center">
        <ArrowDownward />
      </Box>
      <Box p={2}>
        <Autocomplete
          id="combo-box-demo"
          disableClearable
          options={towers}
          getOptionLabel={(option) => option.title}
          fullWidth={true}
          renderInput={(params) => (
            <TextField {...params} label="Tower Selection" variant="outlined" />
          )}
        />
      </Box>
      <Divider />
      <Box p={2} display="flex" justifyContent="flex-end">
        <Box pr={1}>
          <Button>clear</Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          Apply Filter
        </Button>
      </Box>
    </div>
  );

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={toggleDrawer('right', true)} endIcon={<FilterList />}>
        filter
      </Button>
      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </Box>
  );
}
