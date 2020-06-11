import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  ListItemText,
  List,
  FormControlLabel,
  Switch,
  Box,
  CardHeader,
  Divider,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ApproverNonDOA from './ApproverNonDOA';
import ApproverGlobalAccounting from './ApproverGlobalAccounting';
import ApproverDOA from './ApproverDOA';

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
    minWidth: '250px',
  },
  MuiTab: {
    wrapper: {
      alignItems: 'start',
    },
  },
});

export const approverCategories = [
  {
    category: 'Global Accounting',
    approverCount: '8',
    tabInformation: <ApproverGlobalAccounting />,
  },
  {
    category: 'Non-DOA',
    approverCount: '3',
    tabInformation: <ApproverNonDOA />,
  },
  {
    category: 'DOA',
    approverCount: '2',
    tabInformation: <ApproverDOA />,
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
      {value === index && <Box pl={3}>{children}</Box>}
    </Typography>
  );
}

export default function Approvers() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeSwitch = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChangeSwitch}
                name="checkedB"
                color="primary"
              />
            }
            label="Route Emails By Wave"
          />
        </Grid>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
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
                          {approverCount} Approvers
                        </Typography>
                      }
                    />
                  </List>
                }
              />
            ))}
          </Tabs>
          {approverCategories.map(({category, tabInformation}, i) => (
            <TabPanel value={value} key={category} index={i}>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <CardHeader
                      title={
                        <>
                          <Box display="flex" alignItems="center">
                            <Typography variant="h5">{category}</Typography>
                          </Box>
                        </>
                      }
                    />
                  </Box>
                  <Divider />
                  {tabInformation}
                </Grid>
              </Grid>
            </TabPanel>
          ))}
        </div>
      </Grid>
    </>
  );
}
