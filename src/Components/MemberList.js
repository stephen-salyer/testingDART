import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

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

const Members = [
  {title: 'Justice Madden'},
  {title: 'Alberto Shepard'},
  {title: 'Anahi Mayo'},
  {title: 'Mohamed Ferrell'},
  {title: 'Jaylin Mcneil'},
  {title: 'Caden Sosa'},
  {title: 'Monica Carroll'},
  {title: 'Leia Roach'},
  {title: 'Kayden Jordan'},
  {title: 'Billy Lester'},
  {title: 'Kinsley Christian'},
];

const MemberList = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        disableGutters={true}
        className={classes.containerPadding}
      >
        <Grid container direction="row" justify="space-evenly">
          <Grid item={true} xs={12} sm={6}>
            <Typography variant="h3" color="primary">
              Member List
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={2}>
            <Box display="flex" justifyContent="flex-end" flexWrap="wrap">
              <Autocomplete
                id="combo-box-demo"
                options={Members}
                getOptionLabel={(option) => option.title}
                style={{width: '100%'}}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Members"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <Box display="flex">
              <Button
                color="primary"
                className={classes.button}
                endIcon={<GetAppIcon />}
              >
                Export Scope
              </Button>
              <Button
                color="primary"
                className={classes.button}
                endIcon={<GetAppIcon />}
              >
                Export To Excel
              </Button>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={12}>
            <Box display="flex" justifyContent="flex-end" my={2}></Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default MemberList;
