import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CardHeader from '@material-ui/core/CardHeader';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import {TextField, InputAdornment, Fab, Badge} from '@material-ui/core';
import Comment from '@material-ui/icons/Comment';

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
        <Box display="flex" flexDirection="column">
          <Typography variant="subtitle2">Evan Kommenter</Typography>
        </Box>
        <Box mt={0} pl={2}>
          <Typography variant="caption">01/01/20 @1:11PM</Typography>
        </Box>
      </Box>
      <Box pb={2} pl={2} pr={2} pt={0}>
        <Typography variant="caption">
          This is a comment that is not real. It takes up space. Its a happy
          little comment.
        </Typography>
      </Box>
      <Box pb={2} pl={2} pr={2} pt={0}>
        <TextField
          className={(classes.margin, classes.formControl)}
          id="input-with-icon-textfield"
          label="Reply"
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
      <Box pb={2} pl={2} display="flex" flexDirection="row">
        <SubdirectoryArrowRightIcon />
        <Box
          pl={2}
          pr={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
          >
            <Box pr={1}>
              <Typography variant="subtitle2">Amy Replaer</Typography>
            </Box>
            <Box pl={1}>
              <Typography variant="caption">01/01/20</Typography>
              <Typography variant="caption">@1:11PM</Typography>
            </Box>
          </Box>
          <Box pb={2}>
            <Typography variant="caption">
              This is a reply that is not real. It takes up space. Its a happy
              little reply.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={2} pl={2} display="flex" flexDirection="row">
        <SubdirectoryArrowRightIcon />
        <Box
          pl={2}
          pr={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
          >
            <Box pr={1}>
              <Typography variant="subtitle2">Marvin Hanns</Typography>
            </Box>
            <Box pl={1}>
              <Typography variant="caption">01/01/20</Typography>
              <Typography variant="caption">@1:11PM</Typography>
            </Box>
          </Box>
          <Box pb={2} pt={0}>
            <Typography variant="caption">
              This is a reply that is not real. It takes up space. Its a happy
              little reply.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      className={classes.CommentsButtonMargin}
    >
      <Badge badgeContent={1} overlap="circle" color="error">
        <Fab
          size="large"
          color="secondary"
          aria-label="Comment"
          className={classes.margin}
          onClick={toggleDrawer('right', true)}
        >
          <Comment />
        </Fab>
      </Badge>
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
