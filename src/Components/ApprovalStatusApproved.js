import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import 'typeface-roboto';
import {Box, Typography, withStyles, List} from '@material-ui/core';
import MuiListItem from '@material-ui/core/ListItem';

const ListItem = withStyles({
  container: {
    width: '100%',
  },
})(MuiListItem);

const useStyles = makeStyles({
  listItemTextNoMargin: {
    margin: '0',
    flexGrow: '0',
  },
  linkNoDecorationAndCorrection: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  expandedSummary: {
    margin: 0,
  },
});

const programs = [
  {
    title: '2020 APEX & RT MESA Herbicide Program USA',
    programId: 'APIRFP',
    pulledBack: '22/22/2222',
  },
  {
    title: '2020 Acetanilide Dicamba Incentive Offer US',
    programId: 'CHSAIO',
    pulledBack: '33/33/3333',
  },
  {title: '2020 Action Pact-Canada', programId: 'R1712', pulledBack: '1 Time'},
  {
    title: '2020 Crop Protection AMF-Canada',
    programId: 'D1707',
    pulledBack: '44/44/4444',
  },
  {
    title: '2020 Crop Protection Channel Development Resource US',
    programId: 'CHLCRC2',
    pulledBack: '55/55/5555',
  },
];

const ApprovalStatusApproved = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Box pt={1} pb={1}>
          {programs.map(({title, programId, pulledBack}, i) => (
            <Fragment key={i}>
              <ListItem
                className={classes.linkNoDecorationAndCorrection}
                button
                component={Link}
                to={'/program/' + i}
                rel="noopener noreferrer"
              >
                <ListItemText
                  className={classes.listItemTextNoMargin}
                  primary={
                    <Typography variant="subtitle1" style={{fontWeight: 500}}>
                      {[programId, title].join(' • ')}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2">
                      Approved on {pulledBack}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </Box>
      </List>
    </>
  );
};

export default ApprovalStatusApproved;
