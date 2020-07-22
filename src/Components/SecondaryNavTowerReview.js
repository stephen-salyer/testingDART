import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Send, DoneAll, MoreVert, LocalOffer} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TowerReviewFilter from './TowerReviewFilter';
import {
  CircularProgress,
  Menu,
  MenuItem,
  IconButton,
  Chip,
} from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    minWidth: 175,
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
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SecondaryNavTowerReview = () => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    []
  );

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

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
          <Box display="flex" flexDirection="column">
            <Box className={classes.flexPositioning}>
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={buttonClassname}
                  disabled={loading}
                  onClick={handleButtonClick}
                  endIcon={success ? <DoneAll /> : <Send />}
                >
                  Approve Tower
                </Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <TowerReviewFilter />
              <IconButton
                onClick={handleClick}
                aria-label="More"
                component="span"
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Typography variant="inherit">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Send style={{paddingRight: 8}} /> Send Manual
                      Notifications
                    </Box>
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/price-plan"
                >
                  <Typography variant="inherit">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <LocalOffer style={{paddingRight: 8}} /> View Price Plan
                    </Box>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box display="flex" justifyContent="flex-end" pt={1}>
              <Chip
                variant="outline"
                label="All Payees"
                onDelete={handleDelete}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondaryNavTowerReview;
