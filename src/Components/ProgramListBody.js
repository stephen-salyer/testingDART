import Card from '@material-ui/core/Card';
import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ProgramListItems from './ProgramListItems';
import Pagination from '@material-ui/lab/Pagination';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
  pos: {
    marginBottom: 12,
  },
  content: {
    paddingLeft: "0",
    paddingRight: "0",
    paddingTop: "0",
    },
  cardPadding: {
    paddingBottom: "24px",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
}

const ProgramListBody = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={classes.cardPadding}>
        <Card>
          <CardContent className={classes.content}>
              <Tabs value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    position="sticky"
                    aria-label="full width tabs example">
                <Tab label="All (1197)" {...a11yProps(0)} />
                <Tab label="Approved (4)" {...a11yProps(1)} />
                <Tab label="Pending (98)" {...a11yProps(2)} />
                <Tab label="Draft (887)" {...a11yProps(3)} />
                <Tab label="Canceled (12)" {...a11yProps(4)} />
                <Tab label="Back to Draft (12)" {...a11yProps(5)} />
              </Tabs>
            <TabPanel value={value} index={0}>
              <ProgramListItems />
              <div>
                <Pagination count={10} color="secondary" />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProgramListItems />
              <div>
                <Pagination count={10} color="secondary" />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ProgramListItems />
              <div>
                <Pagination count={10} color="secondary" />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ProgramListItems />
              <div>
                <Pagination count={10} color="secondary" />
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <ProgramListItems />
              <div>
                <Pagination count={10} color="secondary" />
              </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <ProgramListItems />
              <div>
                <Pagination count={10} color="secondary" />
              </div>
            </TabPanel>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default ProgramListBody;
