import React from 'react';
import Container from '@material-ui/core/Container';
import SecondaryNavProgramPrintable from './SecondaryNavProgramPrintable';
import {
  CardHeader,
  Box,
  Typography,
  Grid,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const printables = [
  {
    header: 'Program Summary',
    items: [
      {
        mediumBreak: 6,
        title: 'Program Name',
        secondary: 'An_Extremely Long Program Name 123123123123123',
      },
      {mediumBreak: 3, title: 'Program ID', secondary: 'SY6RH'},
      {mediumBreak: 3, title: 'Program Version', secondary: '1.2'},
      {mediumBreak: 3, title: 'Program Status', secondary: 'Draft'},
      {mediumBreak: 3, title: 'Market Year', secondary: '2020'},
      {
        mediumBreak: 3,
        title: 'Start Communication Date',
        secondary: '01/18/2020',
      },
      {
        mediumBreak: 3,
        title: 'End Communication Date',
        secondary: '01/18/2021',
      },
    ],
  },
  {
    header: 'Program Scope',
    items: [
      {
        mediumBreak: 6,
        title: 'Region',
        secondary: 'Europe / Middle East / Africa',
      },
      {mediumBreak: 3, title: 'Program ID', secondary: 'SY6RH'},
      {mediumBreak: 3, title: 'Program Version', secondary: '1.2'},
      {mediumBreak: 3, title: 'Program Status', secondary: 'Draft'},
      {mediumBreak: 3, title: 'Market Year', secondary: '2020'},
      {
        mediumBreak: 3,
        title: 'Start Communication Date',
        secondary: '01/18/2020',
      },
      {
        mediumBreak: 3,
        title: 'End Communication Date',
        secondary: '01/18/2021',
      },
    ],
  },
];

const ProgramPrintable = () => (
  <>
    <SecondaryNavProgramPrintable />
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {printables.map(({header, items}) => (
          <>
            <Grid key={header} item xs={12}>
              <CardHeader
                title={
                  <>
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5">{header}</Typography>
                    </Box>
                  </>
                }
              />
              <Divider />
            </Grid>
            <Grid container spacing={3}>
              {items.map(({title, secondary, mediumBreak}, i) => (
                <>
                  <Grid key={i} item xs={12} md={mediumBreak}>
                    <ListItem>
                      <ListItemText primary={title} secondary={secondary} />
                    </ListItem>
                    <Divider />
                  </Grid>
                </>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  </>
);

export default ProgramPrintable;
