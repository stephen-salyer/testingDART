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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  list: {
    width: '420px',
    minWidth: '420px',
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
  extendedIcon: {
    marginLeft: '8px',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    margin: theme.spacing(1),
  },
}));

const commentsInformation = [
  {
    label: 'Comment',
    comment: [
      {
        name: 'Evan Kommenter',
        dateTime: '01/01/20 @1:11PM',
        type:
          'This is a comment that is not real. It takes up space. Its a happy little comment.',
      },
    ],
  },
  {
    label: 'Reply',
    comment: [
      {
        name: 'Amy Replaer',
        dateTime: '01/01/20 @1:11PM',
        type:
          'This is a reply that is not real. It takes up space. Its a happy little reply.',
        replyIcon: <SubdirectoryArrowRightIcon />,
      },
      {
        name: 'Marvin Hanns',
        dateTime: '01/01/20 @1:11PM',
        type:
          'This is a reply that is not real. It takes up space. Its a happy little reply.',
        replyIcon: <SubdirectoryArrowRightIcon />,
      },
    ],
  },
];

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
      {commentsInformation.map(({label, comment}) => (
        <>
          <Box key={label} pb={2} pl={2} pr={2} pt={0}>
            <TextField
              className={(classes.margin, classes.formControl)}
              id="input-with-icon-textfield"
              label={label}
              variant="outlined"
              multiline
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SendIcon color="secondary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {comment.map(({name, dateTime, type, replyIcon}) => (
            <>
              <Box pb={2} pl={2} display="flex" flexDirection="row">
                {replyIcon}
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
                      <Typography
                        variant="subtitle1"
                        style={{fontWeight: 500}}
                      >
                        {name}
                      </Typography>
                    </Box>
                    <Box pl={1} display="flex" alignItems="center">
                      <Typography variant="body2">{dateTime}</Typography>
                    </Box>
                  </Box>
                  <Box pb={2}>
                    <Typography variant="body2">{type}</Typography>
                  </Box>
                </Box>
              </Box>
            </>
          ))}
        </>
      ))}
    </div>
  );

  return (
    <>
      <Box className={classes.fab}>
        <Badge
          color="error"
          overlap="circle"
          badgeContent={1}
          size="large"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Fab
            size="large"
            color="secondary"
            aria-label="Comment"
            variant="extended"
            onClick={toggleDrawer('right', true)}
          >
            comments
            <Comment className={classes.extendedIcon} />
          </Fab>
        </Badge>
      </Box>
      <Drawer
        style={{width: 30}}
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </>
  );
}
