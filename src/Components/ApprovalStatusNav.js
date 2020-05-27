import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ApprovalStatusFilter from './ApprovalStatusFilter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  chipMargin: {
    marginRight: '8px',
  },
  linkNoDecoration: {
    textDecoration: 'none',
    color: 'inherit',
  },
  containerPadding: {
    padding: '112px 0 32px 0',
  },
}));

const ApprovalStatusNav = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Container
      maxWidth="lg"
      disableGutters={true}
      className={classes.containerPadding}
    >
      <Grid container>
        <Grid item={true} sm={12} md={6}>
          <Typography variant="h3" color="primary">
            Approval Status
          </Typography>
        </Grid>
        <Grid
          item={true}
          sm={12}
          md={6}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <ApprovalStatusFilter />
          </Box>
        </Grid>
        <Grid item={true} sm={12} md={12}>
          <Box display="flex" justifyContent="flex-end" my={2}>
            <div className={classes.chipMargin}>
              <Chip label="2020" onDelete={handleDelete} variant="outlined" />
            </div>
            <Chip
              label="National Brands"
              onDelete={handleDelete}
              variant="outlined"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApprovalStatusNav;
