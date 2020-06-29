import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {ArrowBack} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  containerPadding: {
    padding: '112px 24px 32px 24px',
    [theme.breakpoints.down('sm')]: {
      padding: '75px 16px 32px 16px',
    },
  },
  typographyPadding: {
    padding: '8px 0 0 0',
  },
}));

const SecondaryNavProgramChanges = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.containerPadding}>
      <Grid container direction="row" justify="space-evenly">
        <Grid item xs={12} md={8}>
          <Grid container>
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton
                aria-label="arrow-back"
                color="default"
                href="/program/:id"
              >
                <ArrowBack />
              </IconButton>
              <Typography>Program View</Typography>
            </Box>
          </Grid>
          <Typography variant="h3" color="primary">
            Program Changes
          </Typography>
          <Typography className={classes.typographyPadding}>
            An_Extremely Long Program Name 123123123123123 (Draft)
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Container>
  );
};

export default SecondaryNavProgramChanges;
