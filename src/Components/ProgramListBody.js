import Card from '@material-ui/core/Card';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import Divider from '@material-ui/core/Divider';
import SearchBar from './SearchBar';
import {Hidden} from '@material-ui/core';
import ProgramTotals from './ProgramTotals';

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
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
  title: {
    fontSize: 14,
  },
  content: {
    padding: '0',
    margin: '0 0 -16px 0',
    minHeight: '67vh',
  },
  cardPadding: {
    padding: '0 16px 32px 16px',
  },
});

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
      {value === index && (
        <Box
          style={{
            minHeight: '55vh',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      )}
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
            <SearchBar />
          </Box>
          <Divider />
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="All (1197)" {...a11yProps(0)} />
              <Tab label="Draft (887)" {...a11yProps(1)} />
              <Tab label="Back to Draft (12)" {...a11yProps(2)} />
              <Tab label="Pending (98)" {...a11yProps(3)} />
              <Tab label="Canceled (12)" {...a11yProps(4)} />
              <Tab label="Approved (10)" {...a11yProps(5)} />
            </Tabs>
          </Hidden>
          <Hidden only={['md', 'lg', 'xl']}>
            <Tabs
              className={classes.tabletBP}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              aria-label="full width tabs example"
            >
              <Tab label="All (1197)" {...a11yProps(0)} />
              <Tab label="Draft (887)" {...a11yProps(1)} />
              <Tab label="Back to Draft (12)" {...a11yProps(2)} />
              <Tab label="Pending (98)" {...a11yProps(3)} />
              <Tab label="Canceled (12)" {...a11yProps(4)} />
              <Tab label="Approved (10)" {...a11yProps(5)} />
            </Tabs>
          </Hidden>
          <TabPanel value={value} index={0}>
            <div style={{height: '45vh', overflow: 'scroll'}}>
              <ProgramListItemsAll />
            </div>
            <Box pt={1}>
              <Pagination count={10} color="secondary" />
              <ProgramTotals />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{height: '45vh', overflow: 'scroll'}}>
              <ProgramListItemsApproved />
            </div>
            <Box pt={1}>
              <Pagination count={1} color="secondary" />
              <ProgramTotals />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div style={{height: '45vh', overflow: 'scroll'}}>
              <ProgramListItemsPending />
            </div>
            <Box pt={1}>
              <Pagination count={10} color="secondary" />
              <ProgramTotals />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div style={{height: '45vh', overflow: 'scroll'}}>
              <ProgramListItemsDraft />
            </div>
            <Box pt={1}>
              <Pagination count={10} color="secondary" />
              <ProgramTotals />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div style={{height: '45vh', overflow: 'scroll'}}>
              <ProgramListItemsCanceled />
            </div>
            <Box pt={1}>
              <Pagination count={2} color="secondary" />
              <ProgramTotals />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div style={{height: '45vh', overflow: 'scroll'}}>
              <ProgramListItemsBackToDraft />
            </div>
            <Box pt={1}>
              <Pagination count={2} color="secondary" />
              <ProgramTotals />
            </Box>
          </TabPanel>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProgramListBody;
