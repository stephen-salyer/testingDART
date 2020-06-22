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
    category: 'Dealer',
    approverCount: '12',
  },
  {
    category: 'Grower',
    approverCount: '23',
  },
  {
    category: 'Distributor',
    approverCount: '9',
  },
  {
    category: 'Other',
    approverCount: '32',
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
          <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            indicatorColor="primary"
            className={classes.tabs}
            style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}
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
                        <Typography variant="subtitle1">{category}</Typography>
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

          {approverCategories.map(({category}, i) => (
            <TabPanel value={value} key={category} index={i}>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    pr={2}
                  >
                    <CardHeader
                      title={
                        <>
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Typography variant="h5">{category}</Typography>
                          </Box>
                        </>
                      }
                    />
                  </Box>
                  <Divider />
                  <TowerReviewSubTabs />
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
