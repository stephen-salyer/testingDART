import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import {WarningOutlined} from '@material-ui/icons';
import {IconButton, ClickAwayListener} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function TowerReviewInfoPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>
                You are not an approver on this program.
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IconButton
          onClick={handleClick('right')}
          style={{marginRight: -9, marginLeft: -9, color: amber[500]}}
        >
          <WarningOutlined fontSize="large" />
        </IconButton>
      </ClickAwayListener>
    </div>
  );
}
