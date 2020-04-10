import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CardHeader from '@material-ui/core/CardHeader';
import {TextField, InputAdornment} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  chipOrganize: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chipPadding: {
    marginRight: '8px',
    marginBottom: '8px',
  },
  formControl: {
    width: '100%',
  },
  CommentsButtonMargin: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
  },
});

export default function Comments() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <CardHeader title="Comments"></CardHeader>
        <Box p={1}>
          <IconButton onClick={toggleDrawer(anchor, false)} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Box pb={2} pl={2} pr={2} pt={0}>
        <TextField
          className={(classes.margin, classes.formControl)}
          id="input-with-icon-textfield"
          label="Comment"
          variant="outlined"
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box pl={2} pr={2} display="flex" justifyContent="space-between">
        <Typography variant="subtitle2">Evan Kommenter</Typography>
        <Typography variant="caption">01/01/20 @1:11PM</Typography>
      </Box>
      <Box mt={-0.5} pb={1} pl={2} pr={2}>
        <Typography variant="caption">Tower ABC-123</Typography>
      </Box>
      <Box mt={0} pb={2} pl={2} pr={2}>
        <Typography variant="caption" lineHeight="8px">
          This is a comment that is not real. It takes up space. Its a happy
          little comment.
        </Typography>
      </Box>
    </div>
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      className={classes.CommentsButtonMargin}
    >
      <Button
        onClick={toggleDrawer('right', true)}
        variant="contained"
        color="primary"
      >
        Comments
      </Button>
      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </Box>
  );
}
