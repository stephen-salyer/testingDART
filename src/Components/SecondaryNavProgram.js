import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {MoreVert} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ProgramListFilter from './ProgramListFilter';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#142357',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

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
  },
}));

const SecondaryNavProgram = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Grid container>
              <IconButton aria-label="morevert" color="#000000">
                <MoreVert />
              </IconButton>
            </Grid>
            <Typography variant="h3" color="primary" my={2}>
              Program View CHANGE
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end" my={2}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>add</Icon>}
              >
                Create New Program
              </Button>
              <ProgramListFilter />
              <IconButton aria-label="morevert" color="black">
                <MoreVert />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SecondaryNavProgram;
