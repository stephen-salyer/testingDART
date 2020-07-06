import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import {Warning} from '@material-ui/icons';
import {IconButton, ClickAwayListener} from '@material-ui/core';
import {amber} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ApprovalStatusProgressNotStarted() {
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
                Not Started since 22/22/2222
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleClickAway}>
        <IconButton onClick={handleClick('right')}>
          <Warning fontSize="large" style={{color: amber[900]}} />
        </IconButton>
      </ClickAwayListener>
    </div>
  );
}
