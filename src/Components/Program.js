import Card from '@material-ui/core/Card';
import React from 'react';
import {makeStyles, fade} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SecondaryNavProgram from './SecondaryNavProgram';
import Overview from './Overview';
import Comments from './Comments';
import {Box, Badge, Hidden} from '@material-ui/core';
import Scopes from './Scopes';
import Marketing from './Marketing';
import Operations from './Operations';
import Owners from './Owners';
import Finance from './Finance';
import Approvers from './Approvers';
import Components from './Components';
import AttachedFiles from './AttachedFiles';

const useStyles = makeStyles((theme) => ({
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
    padding: '0',
    minHeight: '67vh',
    '&:last-child': {
      paddingBottom: 0,
    },
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
}));

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
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
    <>
      <SecondaryNavProgram />
      <Container maxWidth="lg" style={{paddingBottom: '100px'}}>
        <Card>
          <CardContent className={classes.content}>
            <Hidden smDown>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  style={{minWidth: '10%'}}
                  label={
                    <div>
                      <Badge color="error" variant="dot">
                        Overview
                      </Badge>
                    </div>
                  }
                />
                <Tab style={{minWidth: '10.1%'}} label="Scopes" />
                <Tab style={{minWidth: '11.1%'}} label="Marketing" />
                <Tab style={{minWidth: '11.1%'}} label="Operations" />
                <Tab style={{minWidth: '10.1%'}} label="Owners" />
                <Tab style={{minWidth: '11.1%'}} label="Finance" />
                <Tab style={{minWidth: '12.1%'}} label="Approvers" />
                <Tab style={{minWidth: '12.1%'}} label="Components" />
                <Tab style={{minWidth: '12.2%'}} label="Attached Files" />
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
                <Tab
                  style={{minWidth: '10%'}}
                  label={
                    <div>
                      <Badge color="error" variant="dot">
                        Overview
                      </Badge>
                    </div>
                  }
                />
                <Tab style={{minWidth: '10.1%'}} label="Scopes" />
                <Tab style={{minWidth: '11.1%'}} label="Marketing" />
                <Tab style={{minWidth: '11.1%'}} label="Operations" />
                <Tab style={{minWidth: '10.1%'}} label="Owners" />
                <Tab style={{minWidth: '11.1%'}} label="Finance" />
                <Tab style={{minWidth: '12.1%'}} label="Approvers" />
                <Tab style={{minWidth: '12.1%'}} label="Components" />
                <Tab style={{minWidth: '12.2%'}} label="Attached Files" />
              </Tabs>
            </Hidden>
            <TabPanel value={value} index={0}>
              <Box p={3}>
                <Overview />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Scopes />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box p={3}>
                <Marketing />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Box p={3}>
                <Operations />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Box p={3}>
                <Owners />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Box p={3}>
                <Finance />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Box p={3}>
                <Approvers />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Box p={3}>
                <Components />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Box>
                <AttachedFiles />
              </Box>
            </TabPanel>
          </CardContent>
        </Card>
      </Container>
      <Box display="flex" justifyContent="flex-end">
        <Comments />
      </Box>
    </>
  );
};

export default Program;
