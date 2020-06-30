import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Divider,
  Box,
  ListItemText,
  Typography,
  FormHelperText,
} from '@material-ui/core';
import {red, green} from '@material-ui/core/colors';

const scopesChanges = [
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
        primary: 'Scope',
        secondaryTakeDiff: (
          <>
            <Typography>
              North America • US •{' '}
              <span
                style={{
                  backgroundColor: red[100],
                  textDecoration: 'line-through',
                }}
              >
                {' '}
                Crop Protection
              </span>{' '}
              • Glyphosate • All
            </Typography>
          </>
        ),
        whoChanged: 'Bob Boberson - YYYY/MM/DD',
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
        primary: 'Scope',
        secondaryTakeDiff: (
          <>
            <Typography>
              North America • US •{' '}
              <span
                style={{
                  backgroundColor: green[100],
                  textDecoration: 'underline',
                }}
              >
                {' '}
                APS
              </span>{' '}
              • Glyphosate • All
            </Typography>
          </>
        ),
        whoChanged: 'Bob Boberson - YYYY/MM/DD',
      },
    ],
  },
];

export default function ProgramChangesOverview() {
  return (
    <Grid container>
      {scopesChanges.map(({items, headers}) => (
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
                <Box display="flex" wstyle={{width: '100%'}}>
                  <Box
                    display="flex"
                    flexGrow="1"
                    pt={2}
                    flexDirection="column"
                    style={{height: '100%'}}
                  >
                    <ListItemText
                      primary={primary}
                      secondary={secondaryTakeDiff}
                    />
                    <Divider />
                    <FormHelperText>{whoChanged}</FormHelperText>
                    <Box pl={3} pr={3}>
                      <Divider
                        style={{height: '100%', width: 1}}
                        orientation="vertical"
                        flexItem
                      />
                    </Box>
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
