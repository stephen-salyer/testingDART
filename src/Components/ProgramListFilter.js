import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {FilterList} from '@material-ui/icons';
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
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import CardHeader from '@material-ui/core/CardHeader';
import 'date-fns';
import {Divider, Grid, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Members} from './MemberList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  list: {
    width: 300,
    [theme.breakpoints.down('md')]: {
      width: '100%',
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

export default function TemporaryDrawer() {
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

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
        <CardHeader title="Filter Programs"></CardHeader>
        <Box p={1}>
          <IconButton onClick={toggleDrawer(anchor, false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Box pb={2} pl={2} pr={2} pt={0}>
        <Autocomplete
          freeSolo
          options={Members}
          getOptionLabel={(option) => option.title}
          style={{width: '100%'}}
          renderInput={(params) => (
            <TextField {...params} label="Search Members" variant="outlined" />
          )}
        />
      </Box>
      <Box pb={2} pl={2} pr={2}>
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
            defaultValue=""
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
            defaultValue=""
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
            Business Category
          </InputLabel>
          <Select
            defaultValue=""
            id="demo-simple-select-outlined"
            label="Business Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Channel</MenuItem>
            <MenuItem value={20}>Climate</MenuItem>
            <MenuItem value={30}>Crop Protection</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Product
          </InputLabel>
          <Select
            defaultValue=""
            id="demo-simple-select-outlined"
            label="Product"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Acceleration</MenuItem>
            <MenuItem value={30}>Acetanilide</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
          <Select
            defaultValue=""
            id="demo-simple-select-outlined"
            label="Brand"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Absolute</MenuItem>
            <MenuItem value={30}>Absolute Maxx</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Payee</InputLabel>
          <Select
            defaultValue=""
            id="demo-simple-select-outlined"
            label="Payee"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Agent</MenuItem>
            <MenuItem value={20}>Dealer/Retail</MenuItem>
            <MenuItem value={30}>Distributor</MenuItem>
            <MenuItem value={40}>Farmer/Grower</MenuItem>
            <MenuItem value={50}>Wholesale</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            fullWidth={true}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Communication Date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" p={2}>
        <Typography variant="subtitle1">TED</Typography>
        <Box display="flex" flexDirection="row" pt={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Min" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Max" variant="outlined" />
            </Grid>
          </Grid>
        </Box>
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
          Apply Filters
        </Button>
      </Box>
    </div>
  );

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={toggleDrawer('right', true)}>
        <FilterList />
      </IconButton>
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
