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
    headers: [
      {
        header: 'Changed From:',
        version: '1.1',
        divider: (
          <Box pl={3} pr={3}>
            <Divider
              style={{height: '30px', width: 1}}
              orientation="vertical"
              flexItem
            />
          </Box>
        ),
      },
      {header: 'Changed To:', version: '1.2'},
    ],
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
        divider: (
          <Box pl={3} pr={3}>
            <Divider
              style={{height: '100%', width: 1}}
              orientation="vertical"
              flexItem
            />
          </Box>
        ),
      },
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
              ></span>
            </Typography>
          </>
        ),
        whoChanged: 'Last Changed By: Bob Boberson - YYYY/MM/DD',
        divider: (
          <Box pl={3} pr={3}>
            <Divider
              style={{height: '100%', width: 1}}
              orientation="vertical"
              flexItem
            />
          </Box>
        ),
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
    <Grid container>
      {overviewChanges.map(({items, headers}) => (
        <>
          {headers.map(({header, version, divider}, i) => (
            <>
              <Grid key={i} xs={6}>
                <Box display="flex" style={{width: '100%'}}>
                  <Box display="flex" style={{width: '100%'}}>
                    <Typography variant="caption">
                      {header} {version}
                    </Typography>
                  </Box>
                  {divider}
                </Box>
              </Grid>
            </>
          ))}
          {items.map(({primary, secondaryTakeDiff, whoChanged, divider}, i) => (
            <>
              <Grid item xs={6} key={i}>
                <Box display="flex" style={{width: '100%'}}>
                  <Box
                    display="flex"
                    flexGrow="1"
                    flexDirection="column"
                    style={{height: '100%'}}
                  >
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
                  {divider}
                </Box>
              </Grid>
            </>
          ))}
        </>
      ))}
    </Grid>
  );
}
