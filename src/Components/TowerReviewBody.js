import React from 'react';
import Grid from '@material-ui/core/Grid';
import {ListItemText, List, Box, CardHeader, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ProgramTotals from './ProgramTotals';
import Pagination from '@material-ui/lab/Pagination';
import TowerReviewSubTabs from './TowerReviewSubTabs';
import TowerReviewPrograms from './TowerReviewPrograms';
import TowerReviewApproveProgramsModal from './TowerReviewApproveProgramsModal';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  listItemTertiary: {
    marginTop: '0',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.875rem',
  },
  listItemTextNoMargin: {
    marginBottom: '0',
  },
  tabs: {
    minWidth: '200px',
  },
  MuiTab: {
    wrapper: {
      alignItems: 'start',
    },
  },
});

export const approverCategories = [
  {
    category: 'All',
    approverCount: '89',
    information: <TowerReviewPrograms />,
  },
  {
    category: 'Dealer',
    approverCount: '12',
    information: <TowerReviewSubTabs />,
  },
  {
    category: 'Grower',
    approverCount: '23',
    information: <TowerReviewSubTabs />,
  },
  {
    category: 'Distributor',
    approverCount: '9',
    information: <TowerReviewSubTabs />,
  },
  {
    category: 'Other / Multi',
    approverCount: '32',
    information: <TowerReviewSubTabs />,
  },
];

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      style={{width: '100%'}}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box pl={1}>{children}</Box>}
    </Typography>
  );
}

export default function TowerReviewBody() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Divider />
        <div className={classes.root}>
          <Box
            display="flex"
            flexDirection="column"
            className={classes.tabs}
            style={{
              borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Tabs
              orientation="vertical"
              variant="standard"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="primary"
            >
              {approverCategories.map(({category, approverCount}, i) => (
                <Tab
                  style={{textAlign: 'left'}}
                  key={i}
                  label={
                    <List style={{width: '100%'}}>
                      <ListItemText
                        className={classes.listItemTextNoMargin}
                        primary={
                          <Typography
                            variant="subtitle1"
                            style={{fontWeight: 'bold'}}
                          >
                            {category}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            style={{
                              marginTop: '0',
                              fontWeight: '400',
                              color: 'rgba(0, 0, 0, 0.54)',
                              fontSize: '0.875rem',
                            }}
                          >
                            {approverCount} Programs
                          </Typography>
                        }
                      />
                    </List>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {approverCategories.map(({category, information}, i) => (
            <TabPanel value={value} key={category} index={i}>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    pr={2}
                    style={{width: '100%'}}
                  >
                    <CardHeader
                      style={{width: '100%'}}
                      title={
                        <>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            style={{width: '100%'}}
                          >
                            <Typography variant="h5">{category}</Typography>
                            <TowerReviewApproveProgramsModal />
                          </Box>
                        </>
                      }
                    />
                  </Box>
                  <Divider />
                  {information}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Pagination count={1} color="secondary" />
                </Box>
                <ProgramTotals />
              </Grid>
            </TabPanel>
          ))}
        </div>
      </Grid>
    </>
  );
}
