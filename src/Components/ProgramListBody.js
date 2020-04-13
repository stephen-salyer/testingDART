import Card from '@material-ui/core/Card';
import React from 'react';
import {makeStyles, fade} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SecondaryNav from './SecondaryNav';
import ProgramListItemsAll from './ProgramListItemsAll';
import ProgramListItemsApproved from './ProgramListItemsApproved';
import ProgramListItemsPending from './ProgramListItemsPending';
import ProgramListItemsDraft from './ProgramListItemsDraft';
import ProgramListItemsCanceled from './ProgramListItemsCanceled';
import ProgramListItemsBackToDraft from './ProgramListItemsBackToDraft';
import Pagination from '@material-ui/lab/Pagination';
import CardHeader from '@material-ui/core/CardHeader';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0',
    paddingBottom: '8px',
    minHeight: '960px',
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
}));

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
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
};

const ProgramListBody = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" className={classes.cardPadding}>
      <SecondaryNav />
      <Card>
        <CardContent className={classes.content}>
          <Box display="flex" justifyContent="space-between">
            <CardHeader title="Programs"></CardHeader>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
              />
            </div>
          </Box>
          <Divider />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            position="sticky"
            aria-label="full width tabs example"
          >
            <Tab label="All (1197)" {...a11yProps(0)} />
            <Tab label="Approved (4)" {...a11yProps(1)} />
            <Tab label="Pending (98)" {...a11yProps(2)} />
            <Tab label="Draft (887)" {...a11yProps(3)} />
            <Tab label="Canceled (12)" {...a11yProps(4)} />
            <Tab label="Back to Draft (12)" {...a11yProps(5)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <ProgramListItemsAll />
            <div>
              <Pagination count={10} color="secondary" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProgramListItemsApproved />
            <div>
              <Pagination count={1} color="secondary" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ProgramListItemsPending />
            <div>
              <Pagination count={10} color="secondary" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ProgramListItemsDraft />
            <div>
              <Pagination count={10} color="secondary" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <ProgramListItemsCanceled />
            <div>
              <Pagination count={2} color="secondary" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <ProgramListItemsBackToDraft />
            <div>
              <Pagination count={2} color="secondary" />
            </div>
          </TabPanel>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProgramListBody;
