import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Divider,
  Box,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
} from '@material-ui/core';
import {red, green} from '@material-ui/core/colors';

const useStyles = makeStyles({
  formControl: {
    margin: 0,
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap',
    minWidth: 120,
  },
  flexPositioning: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 16,
  },
});

const overviewChanges = [
  {
    version: 'Version',
    items: [
      {
        primary: 'Program Name',
        secondaryTakeDiff: (
          <>
            <Typography>
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                An Extremely
              </span>{' '}
              Long Program Name{' '}
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                123123123123123
              </span>
            </Typography>
          </>
        ),
        whoChanged: 'Bob Boberson - YYYY/MM/DD',
      },
      {
        primary: 'Program ID',
        secondaryTakeDiff: (
          <>
            <Typography>Program ID</Typography>
          </>
        ),
        whoChanged: 'Bob Boberson - YYYY/MM/DD',
      },
    ],
  },
  {
    version: 'Version',
    items: [
      {
        primary: 'Program Name',
        secondaryTakeDiff: (
          <>
            <Typography>
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                An Extremely
              </span>{' '}
              Long Program Name{' '}
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                123123123123123
              </span>
            </Typography>
          </>
        ),
        whoChanged: 'Bob Boberson - YYYY/MM/DD',
      },
      {
        primary: 'Program ID',
        secondaryTakeDiff: (
          <>
            <Typography>Program ID</Typography>
          </>
        ),
        whoChanged: 'Bob Boberson - YYYY/MM/DD',
      },
    ],
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export default function ProgramChangesOverview() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {/*
        <Grid item xs={6}>
          <Box className={classes.flexPositioning}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              margin="dense"
              label="Version"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Version
              </InputLabel>
              <Select
                style={{height: 37}}
                MenuProps={menuProps}
                defaultValue={20}
                id="demo-simple-select-outlined"
                label="Version"
              >
                <MenuItem value={10}>1.1</MenuItem>
                <MenuItem value={20}>1.2</MenuItem>
                <MenuItem value={30}>1.3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.flexPositioning}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              margin="dense"
              label="Version"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Version
              </InputLabel>
              <Select
                style={{height: 37}}
                MenuProps={menuProps}
                defaultValue={30}
                id="demo-simple-select-outlined"
                label="Version"
              >
                <MenuItem value={10}>1.1</MenuItem>
                <MenuItem value={20}>1.2</MenuItem>
                <MenuItem value={30}>1.3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Box display="flex" style={{width: '100%'}}>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program Name"
                  secondary={
                    <>
                      <Typography>
                        <span
                          style={{
                            backgroundColor: red[100],
                            textDecoration: 'line-through',
                          }}
                        >
                          An Extremely
                        </span>{' '}
                        Long Program Name{' '}
                        <span
                          style={{
                            backgroundColor: red[100],
                            textDecoration: 'line-through',
                          }}
                        >
                          123123123123123
                        </span>
                      </Typography>
                    </>
                  }
                />
                <Divider />
                <FormHelperText>Bob Boberson - YYYY/MM/DD</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program ID"
                  secondary={
                    <>
                      <Typography>Program ID</Typography>
                    </>
                  }
                />
                <Divider />
                <FormHelperText>Bob Boberson - YYYY/MM/DD</FormHelperText>
              </Grid>
            </Grid>
          </Grid>
          <Box pl={3} pr={3}>
            <Divider
              style={{height: '100%', width: 1}}
              orientation="vertical"
              flexItem
            />
          </Box>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program Name"
                  secondary={
                    <>
                      <Typography>
                        <span
                          style={{
                            backgroundColor: green[100],
                            textDecoration: 'underline',
                          }}
                        >
                          A very
                        </span>{' '}
                        Long Program Name
                      </Typography>
                    </>
                  }
                />
                <Divider />
                <FormHelperText>Bob Boberson - YYYY/MM/DD</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <ListItemText
                  primary="Program ID"
                  secondary={
                    <>
                      <Typography>
                        Program ID{' '}
                        <span
                          style={{
                            backgroundColor: green[100],
                            textDecoration: 'underline',
                          }}
                        >
                          Here
                        </span>
                      </Typography>
                    </>
                  }
                />
                <Divider />
                <FormHelperText>Bob Boberson - YYYY/MM/DD</FormHelperText>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        this is where the change happens */}
        {overviewChanges.map(({version, items}) => (
          <>
            <Grid key={version} item xs={6}>
              <Box className={classes.flexPositioning}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  margin="dense"
                  label={version}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    {version}
                  </InputLabel>
                  <Select
                    style={{height: 37}}
                    MenuProps={menuProps}
                    defaultValue={20}
                    id="demo-simple-select-outlined"
                    label="Version"
                  >
                    <MenuItem value={10}>1.1</MenuItem>
                    <MenuItem value={20}>1.2</MenuItem>
                    <MenuItem value={30}>1.3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {items.map(({primary, secondaryTakeDiff, whoChanged}, i) => (
                <>
                  <ListItemText
                    key={i}
                    primary={primary}
                    secondary={secondaryTakeDiff}
                  />
                  <Divider />
                  <FormHelperText>{whoChanged}</FormHelperText>
                  <Box pl={3} pr={3}>
                    <Divider
                      style={{height: '100%', width: 1}}
                      orientation="vertical"
                      flexItem
                    />
                  </Box>
                </>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}
