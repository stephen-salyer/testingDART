import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {Sort} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CloseIcon from '@material-ui/icons/Close';
import CardHeader from '@material-ui/core/CardHeader';
import {
  Divider,
  FormLabel,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

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

export default function TowerReviewSort() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

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
        <CardHeader title="Sort Programs"></CardHeader>
        <Box p={1}>
          <IconButton onClick={toggleDrawer(anchor, false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box p={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Currencies
          </InputLabel>
          <Select
            MenuProps={menuProps}
            defaultValue={10}
            id="demo-simple-select-outlined"
            label="Currencies"
          >
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>CAN</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Program Status
          </InputLabel>
          <Select
            MenuProps={menuProps}
            defaultValue={10}
            id="demo-simple-select-outlined"
            label="Program Status"
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Draft</MenuItem>
            <MenuItem value={30}>Pending</MenuItem>
            <MenuItem value={40}>Approved</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box pb={2} pl={2} pr={2}>
        <FormControl component="fieldset" className={classes.formControlRadio}>
          <FormLabel>
            <Typography>Show Non-Tower Components?</Typography>
          </FormLabel>
          <RadioGroup aria-label="quiz" name="quiz">
            <Box display="flex">
              <FormControlLabel value="best" control={<Radio />} label="Yes" />
              <FormControlLabel value="worst" control={<Radio />} label="No" />
            </Box>
          </RadioGroup>
        </FormControl>
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
          Sort
        </Button>
      </Box>
    </div>
  );

  return (
    <Box display="flex" alignItems="center">
      <Button onClick={toggleDrawer('right', true)} endIcon={<Sort />}>
        Sort
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
