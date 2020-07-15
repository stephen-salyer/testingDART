import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Divider,
  Box,
  ListItemText,
  Typography,
  FormHelperText,
  ListItemSecondaryAction,
  ListItem,
  List,
} from '@material-ui/core';
import {red, green} from '@material-ui/core/colors';
import ProgramChangesHistoryModal from './ProgramChangesHistoryModal';

const overviewChanges = [
  {
    header: 'Changed From:',
    version: '1.1',
    items: [
      {
        primary: 'Program Name',
        secondaryTakeDiff: (
          <>
            <Typography>
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                An Extremely
              </span>{' '}
              Long Program Name{' '}
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                123123123123123
              </span>
            </Typography>
          </>
        ),
        whoChanged: 'Last Changed By: Bob Boberson - YYYY/MM/DD',
      },
      {
        primary: 'Program ID',
        secondaryTakeDiff: (
          <>
            <Typography>Program ID</Typography>
          </>
        ),
        whoChanged: 'Last Changed By: Bob Boberson - YYYY/MM/DD',
      },
    ],
  },
  {
    header: 'Changed To:',
    version: '1.2',
    items: [
      {
        primary: 'Program Name',
        secondaryTakeDiff: (
          <>
            <Typography>
              <span
                style={{
                  backgroundColor: green[100],
                  textDecoration: 'underline',
                }}
              >
                A very
              </span>{' '}
              Long Program Name
            </Typography>
          </>
        ),
        whoChanged: 'Last Changed By: Bob Boberson - YYYY/MM/DD',
      },
      {
        primary: 'Program ID',
        secondaryTakeDiff: (
          <>
            <Typography>
              Program ID{' '}
              <span
                style={{
                  backgroundColor: green[100],
                  textDecoration: 'underline',
                }}
              >
                Here
              </span>
            </Typography>
          </>
        ),
        whoChanged: 'Last Changed By: Bob Boberson - YYYY/MM/DD',
      },
    ],
  },
];

export default function ProgramChangesOverview() {
  return (
    <Grid container spacing={3}>
      {overviewChanges.map(({header, version, items}) => (
        <>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">
              {header} {version}
            </Typography>
            {items.map(({primary, secondaryTakeDiff, whoChanged}) => (
              <>
                <Box display="flex" flexGrow="1" flexDirection="column">
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={primary}
                        secondary={secondaryTakeDiff}
                      />
                      <ListItemSecondaryAction>
                        <ProgramChangesHistoryModal />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <FormHelperText style={{paddingLeft: 16}}>
                      {whoChanged}
                    </FormHelperText>
                  </List>
                </Box>
              </>
            ))}
          </Grid>
        </>
      ))}
    </Grid>
  );
}
