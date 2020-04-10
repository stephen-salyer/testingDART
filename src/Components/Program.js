import Card from '@material-ui/core/Card';
import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  fade,
} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SecondaryNavProgram from './SecondaryNavProgram';
import Overview from './Overview';
import ProgramListItemsApproved from './ProgramListItemsApproved';
import ProgramListItemsPending from './ProgramListItemsPending';
import ProgramListItemsDraft from './ProgramListItemsDraft';
import ProgramListItemsCanceled from './ProgramListItemsCanceled';
import ProgramListItemsBackToDraft from './ProgramListItemsBackToDraft';
import Comments from './Comments';
import {Warning} from '@material-ui/icons';
import {Box} from '@material-ui/core';

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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0',
    paddingBottom: '8px',
    minHeight: '68vh',
  },
  cardPadding: {
    paddingBottom: '8px',
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
      },
    },
  },
});

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

const Program = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <SecondaryNavProgram />
      <Container maxWidth="lg" className={classes.cardPadding}>
        <Card>
          <CardContent className={classes.content}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="full width tabs example"
            >
              <Tab
                label={
                  <div>
                    <Warning style={{verticalAlign: 'middle'}} /> Overview
                  </div>
                }
                {...a11yProps(0)}
              />
              <Tab label="Scopes" {...a11yProps(1)} />
              <Tab label="Marketing" {...a11yProps(2)} />
              <Tab label="Operations" {...a11yProps(3)} />
              <Tab label="Owners" {...a11yProps(4)} />
              <Tab label="Finance" {...a11yProps(5)} />
              <Tab label="Approvers" {...a11yProps(6)} />
              <Tab label="Components" {...a11yProps(7)} />
              <Tab label="Attached Files" {...a11yProps(8)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Overview />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProgramListItemsApproved />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ProgramListItemsPending />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ProgramListItemsDraft />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <ProgramListItemsCanceled />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <ProgramListItemsBackToDraft />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <ProgramListItemsBackToDraft />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <ProgramListItemsBackToDraft />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <ProgramListItemsBackToDraft />
            </TabPanel>
          </CardContent>
        </Card>
      </Container>
      <Box display="flex" justifyContent="flex-end">
        <Comments />
      </Box>
    </ThemeProvider>
  );
};

export default Program;