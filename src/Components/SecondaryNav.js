import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {MoreVert, Add} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ProgramListFilter from './ProgramListFilter';
import {Menu, MenuItem} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

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
    padding: '112px 0 32px 0',
    [theme.breakpoints.down('xs')]: {
      padding: '75px 0 16px 0',
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

const SecondaryNav = () => {
  const classes = useStyles();

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
          <Typography variant="h3" color="primary">
            Program List
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={7} md={6}>
          <Box className={classes.flexPositioning}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Add />}
            >
              Create New Program
            </Button>
            <ProgramListFilter />
            <IconButton aria-label="morevert" onClick={handleClick}>
              <MoreVert />
            </IconButton>
            <Menu
              MenuProps={MenuProps}
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
                    <GetAppIcon style={{paddingRight: 8}} /> Status Report
                  </Box>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
        <Grid item={true} xs={12} md={12}>
          <Box className={classes.flexPositioning}>
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
  );
};

export default SecondaryNav;
