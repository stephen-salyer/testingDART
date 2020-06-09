import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  MenuItem,
  Box,
  Divider,
  IconButton,
  CardHeader,
  Typography,
  ListItemText,
  List,
  ListItemSecondaryAction,
  Menu,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ApproverManualNotify from './ApproverManualNotify';
import ApproverChart from './ApproverChart';
import {Members, approvers} from './ApproverNonDOADetails';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: 'orange',
        '&$focused': {
          color: 'blue',
        },
      },
    },
  },
  listItemTertiary: {
    lineHeight: '0.5',
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

export default function ApproverNonDOA() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Box pt={3}>
            <Autocomplete
              options={Members}
              MenuProps={MenuProps}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Members"
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box style={{maxHeight: '365px', overflow: 'scroll'}}>
            {approvers.map(({progress, name, wave, ted, year}, i) => (
              <>
                <List key={i}>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <ApproverManualNotify />
                    <Box display="flex" flexDirection="column">
                      <ListItemText
                        className={classes.listItemTextNoMargin}
                        primary={
                          <Typography
                            variant="overline"
                            style={{lineHeight: '0px'}}
                          >
                            {progress}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="subtitle1">{name}</Typography>
                        }
                      />
                      <ListItemText
                        classes={{primary: classes.listItemTertiary}}
                        primary={[wave, ted, year].join(' • ')}
                      />
                    </Box>
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={handleClick}
                        aria-label="More"
                        component="span"
                        edge="end"
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </Box>
                </List>

                <Divider />
              </>
            ))}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Remove Approver</MenuItem>
            </Menu>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <CardHeader
            style={{paddingTop: 7}}
            title={
              <>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Stats Here?</Typography>
                </Box>
              </>
            }
          />
          <Divider />
          <Box pt={1}>
            <ApproverChart />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
