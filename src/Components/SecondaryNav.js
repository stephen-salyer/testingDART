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
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ProgramListFilter from './ProgramListFilter';
import {Link, withRouter} from 'react-router-dom';

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
  linkNoDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
  containerPadding: {
    padding: '16px 0 0 0',
  },
}));

const SecondaryNav = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        disableGutters={true}
        className={classes.containerPadding}
      >
        <Grid container direction="row" justify="space-evenly">
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" color="primary">
              Program List
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>add</Icon>}
              >
                Create New Program
              </Button>
              <ProgramListFilter />
              <Link
                to="../app.js"
                rel="noopener noreferrer"
                className={classes.linkNoDecoration}
              >
                <IconButton aria-label="morevert">
                  <MoreVert />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box display="flex" justifyContent="flex-end" my={2}>
              <div className={classes.chipMargin}>
                <Chip label="2020" onDelete={handleDelete} variant="outlined" />
              </div>
              <Chip
                label="National Brands"
                onDelete={handleDelete}
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default withRouter(SecondaryNav);
