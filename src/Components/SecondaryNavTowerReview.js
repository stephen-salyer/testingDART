import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Send} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TowerReviewFilter from './TowerReviewFilter';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  chipMargin: {
    marginRight: '8px',
    paddingTop: 8,
    paddingBottom: 8,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  linkNoDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
  containerPadding: {
    padding: '112px 0 8px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '75px 0 8px 0',
    },
  },
  flexPositioning: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'start',
      paddingTop: 8,
      paddingBottom: 8,
    },
  },
  currencySelect: {
    height: 37,
    width: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
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

const SecondaryNavTowerReview = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      disableGutters={true}
      className={classes.containerPadding}
    >
      <Grid container>
        <Grid item={true} xs={12} sm={5} md={6}>
          <Box pb={1}>
            <Typography variant="h3" color="primary">
              Tower Review
            </Typography>
            <Typography>
              2020 / North America / US / Alfalfa / Channel
            </Typography>
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={7} md={6}>
          <Box className={classes.flexPositioning}>
            <FormControl
              style={{marginTop: '4px'}}
              variant="outlined"
              margin="dense"
              label="Version"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Currency
              </InputLabel>
              <Select
                className={classes.currencySelect}
                MenuProps={menuProps}
                defaultValue={10}
                id="demo-simple-select-outlined"
                label="Currency"
              >
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>EUR</MenuItem>
                <MenuItem value={30}>(Local)</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Send />}
            >
              Approve Tower
            </Button>
            <TowerReviewFilter />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondaryNavTowerReview;
