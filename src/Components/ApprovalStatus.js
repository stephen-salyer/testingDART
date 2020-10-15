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
import ApprovalStatusChart from './ApprovalStatusChart';
import {Grid, ListItem, ListItemText, Hidden} from '@material-ui/core';
import ApprovalStatusNoPrograms from './ApprovalStatusNoPrograms';
import ApprovalStatusPending from './ApprovalStatusPending';
import ApprovalStatusApproved from './ApprovalStatusApproved';

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

const kpi = [
  {
    title: 'Program Creation to Approval Submission',
    // include target
    count: '11 Weeks 4 Days | 10 Weeks 2 Days',
    desktopSize: 12,
    tabletSize: 12,
  },
  {
    title: 'Num. of Approvers',
    count: '8 | 7.2',
    desktopSize: 4,
    tabletSize: 12,
  },
  {
    title: 'Non-DOA',
    count: '6 | 5.5',
    desktopSize: 4,
    tabletSize: 12,
  },
  {
    title: 'DOA',
    count: '7 | 7.6',
    desktopSize: 4,
    tabletSize: 12,
  },
  {
    title: 'Approval Submission to Final Approval',
    count: '5 Weeks 3 Days | 3 Weeks 8 Days',
    desktopSize: 12,
    tabletSize: 12,
  },
  {
    title: 'DOA Approvers who meet or exceed Total Expected Discount RENAME',
    count: '5.3 | 3.8',
    desktopSize: 12,
    tabletSize: 12,
  },
];

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Card>
            <CardHeader
              style={{padding: '28px 16px'}}
              title="Status of Programs"
            ></CardHeader>
            <Divider />
            <Box
              style={{minHeight: 243}}
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ApprovalStatusChart />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card>
            <CardHeader
              title="Approver KPIs Average"
              subheader="2019 | 2020 Comparison"
            ></CardHeader>
            <Divider />
            <Box mb={3}>
              <Grid container spacing={3}>
                {kpi.map(({title, count, desktopSize, tabletSize}, i) => (
                  <>
                    <Grid
                      item
                      xs={tabletSize}
                      sm={tabletSize}
                      lg={desktopSize}
                      key={i}
                      style={{marginBottom: '-24px'}}
                    >
                      <ListItem>
                        <ListItemText primary={title} secondary={count} />
                      </ListItem>
                      <Divider />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent style={{padding: '0 0 24px 0'}}>
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
                  <Tab label="Draft (887)" {...a11yProps(0)} />
                  <Tab label="None Example (0)" {...a11yProps(1)} />
                  <Tab label="Pending (98)" {...a11yProps(2)} />
                  <Tab label="Approved (4)" {...a11yProps(3)} />
                </Tabs>
              </Hidden>
              <Hidden only={['xl', 'lg', 'md']}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                >
                  <Tab label="Draft (887)" {...a11yProps(0)} />
                  <Tab label="None Example (0)" {...a11yProps(1)} />
                  <Tab label="Pending (98)" {...a11yProps(2)} />
                  <Tab label="Approved (4)" {...a11yProps(3)} />
                </Tabs>
              </Hidden>
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
                  <ApprovalStatusNoPrograms />
                </Box>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Box className={classes.tabPanel}>
                  <ApprovalStatusPending />
                </Box>
                <Pagination
                  style={{paddingTop: '16px', marginBottom: '-8px'}}
                  count={10}
                  color="secondary"
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Box className={classes.tabPanel}>
                  <ApprovalStatusApproved />
                </Box>
                <Pagination
                  style={{paddingTop: '16px', marginBottom: '-8px'}}
                  count={10}
                  color="secondary"
                />
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApprovalStatus;
