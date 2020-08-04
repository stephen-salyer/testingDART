import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Divider,
  IconButton,
  Button,
  FormHelperText,
} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Add} from '@material-ui/icons';

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
  overrides: {
    MuiFormLabel: {
      root: {
        color: 'orange',
        '&$focused': {
          color: 'blue',
        },
      },
    },
  },
}));

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

export default function ComponentInformationFinance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="P&L">P&L</InputLabel>
            <Select
              MenuProps={MenuProps}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              label="P&L"
            >
              <MenuItem value={10}>
                Angola • Crop Protection • Glyphosate • Roundup
              </MenuItem>
              <MenuItem value={20}>
                Angola • Crop Protection • Glyphosate • Roundup2
              </MenuItem>
              <MenuItem value={30}>
                Angola • Crop Protection • Glyphosate • Roundup3
              </MenuItem>
            </Select>
            <FormHelperText>
              If multi-year program, provide total expected discount for current
              year and for each future year. List each year separately.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="Market Year">Market Year</InputLabel>
            <Select
              MenuProps={MenuProps}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              defaultValue={10}
              label="Market Year"
            >
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={20}>2021</MenuItem>
              <MenuItem value={30}>2022</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Expected Discount"
            defaultValue="$1,000,000"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box pb={1} pt={1}>
            <Divider />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        display="flex"
        flexDirection="row"
        wrap="nowrap"
      >
        <Grid container item spacing={3}>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="P&L">P&L</InputLabel>
              <Select
                MenuProps={MenuProps}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                defaultValue={20}
                label="P&L"
              >
                <MenuItem value={10}>
                  Angola • Crop Protection • Glyphosate • Roundup
                </MenuItem>
                <MenuItem value={20}>
                  Angola • Crop Protection • Glyphosate • Roundup2
                </MenuItem>
                <MenuItem value={30}>
                  Angola • Crop Protection • Glyphosate • Roundup3
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="Market Year">Market Year</InputLabel>
              <Select
                MenuProps={MenuProps}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                defaultValue={20}
                label="Market Year"
              >
                <MenuItem value={10}>2020</MenuItem>
                <MenuItem value={20}>2021</MenuItem>
                <MenuItem value={30}>2022</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Expected Discount"
              defaultValue="$1,000,000"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container item sm={1} alignItems="center">
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Button color="primary" variant="outlined" endIcon={<Add />}>
            Add Financial P&L
          </Button>
        </Grid>
        <Grid item xs={12} ms={6}>
          <TextField
            label="Total Expected Discount"
            defaultValue="$2,100,000"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
}
