import React from 'react';
import 'typeface-roboto';
import {
  Typography,
  Grid,
  Divider,
  Box,
  makeStyles,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  spacing: {
    padding: '0 8px 0 0',
  },
  spacingBoth: {
    padding: '0 8px',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  currency: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'start',
    },
  },
}));

const currencies = [{title: 'AUD'}];

export default function ProgramTotals() {
  const classes = useStyles();
  const [value] = React.useState(currencies[0]);

  return (
    <>
      <Box pt={1}>
        <Divider />
      </Box>
      <Box pb={1} pt={2} pl={2} pr={2}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" style={{height: '100%'}}>
              <Typography style={{padding: '0 8px 0 0'}}>
                Programs: 1234
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                className={classes.spacingBoth}
                style={{padding: '0px 8px'}}
              >
                Components: 4321
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes.currency}>
              <Typography className={classes.spacing} style={{paddingTop: 1}}>
                12,345,678 EUR
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                className={classes.spacingBoth}
                style={{paddingTop: 1}}
              >
                13,687,961.84 USD
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                className={classes.spacingBoth}
                style={{paddingTop: 1}}
              >
                20,543,851.29
              </Typography>
              <Autocomplete
                size="small"
                disableClearable
                value={value}
                options={currencies}
                style={{minWidth: 90}}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField value="12345" {...params} variant="outlined" />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
