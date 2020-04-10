import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {ArrowBack, MoreVert} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
  containerPadding: {
    padding: '16px 24px 24px 24px',
  },
  typographyPadding: {
    padding: '8px 0 0 0',
  },
  formControl: {
    minWidth: 120,
  },
}));

const SecondaryNavProgram = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.containerPadding}>
      <Grid container direction="row" justify="space-evenly">
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton
                aria-label="arrow-back"
                color="default"
                href="/program-list"
              >
                <ArrowBack />
              </IconButton>
              <Typography>Programs</Typography>
            </Box>
          </Grid>
          <Typography variant="h3" color="primary">
            Program View
          </Typography>
          <Typography className={classes.typographyPadding}>
            An_Extremely Long Program Name 123123123123123 (Draft)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="flex-end">
            <FormControl
              variant="outlined"
              className={classes.formControl}
              margin="dense"
              label="Version"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Version
              </InputLabel>
              <Select
                defaultValue=""
                id="demo-simple-select-outlined"
                label="Version"
              >
                <MenuItem value={10}>1.1</MenuItem>
                <MenuItem value={20}>1.2</MenuItem>
                <MenuItem value={30}>1.3</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>add</Icon>}
            >
              Route For Approval
            </Button>
            <IconButton aria-label="morevert" color="default">
              <MoreVert />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondaryNavProgram;
