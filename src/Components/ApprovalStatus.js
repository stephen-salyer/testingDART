import Card from '@material-ui/core/Card';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import SearchBar from './SearchBar';
import ApprovalStatusNav from './ApprovalStatusNav';
import ApprovalStatusDraft from './ApprovalStatusDraft';

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
    minHeight: '67vh',
  },
  tabPanel: {
    overflow: 'scroll',
    maxHeight: '52vh',
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

const ApprovalStatus = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" style={{paddingBottom: '24px'}}>
      <ApprovalStatusNav />
      <Card disablePadding>
        <CardContent className={classes.content}>
          <Box display="flex" justifyContent="space-between">
            <CardHeader title="Programs"></CardHeader>
            <SearchBar />
          </Box>
          <Divider />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Draft (887)" {...a11yProps(0)} />
            <Tab label="Pulled Back (12)" {...a11yProps(1)} />
            <Tab label="Pending (98)" {...a11yProps(2)} />
            <Tab label="Approved (4)" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box className={classes.tabPanel}>
              <ApprovalStatusDraft />
            </Box>
            <Pagination
              style={{paddingTop: '16px', marginBottom: '-8px'}}
              count={10}
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box className={classes.tabPanel}>
              <ApprovalStatusDraft />
            </Box>
            <Pagination
              style={{paddingTop: '16px', marginBottom: '-8px'}}
              count={10}
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box className={classes.tabPanel}>
              <ApprovalStatusDraft />
            </Box>
            <Pagination
              style={{paddingTop: '16px', marginBottom: '-8px'}}
              count={10}
              color="secondary"
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box className={classes.tabPanel}>
              <ApprovalStatusDraft />
            </Box>
            <Pagination
              style={{paddingTop: '16px', marginBottom: '-8px'}}
              count={10}
              color="secondary"
            />
          </TabPanel>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ApprovalStatus;
