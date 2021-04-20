import {Box, Container, Typography} from '@material-ui/core';
import React from 'react';

const tableHeaders = [
  'Table Header 1',
  'Table Header 2',
  'Table Header 3',
  'Table Header 4',
  'Table Header 5',
  'Table Header 6',
  'Table Header 7',
  'Table Header 8',
  'Table Header 9',
  'Table Header 10',
  'Table Header 11',
  'Table Header 12',
  'Table Header 13',
];

const tableData = [
  'Table Data 1',
  'Table Data 2',
  'Table Data 3',
  'Table Data 4',
  'Table Data 5',
  'Table Data 6',
  'Table Data 7',
  'Table Data 8',
  'Table Data 9',
  'Table Data 10',
  'Table Data 11',
  'Table Data 12',
  'Table Data 13',
];

export default function TableExample() {
  return (
    <>
      <Container maxWidth="lg" style={{paddingTop: 80}}>
        <Box p={2} style={{border: '2px solid lightGrey', borderRadius: 5}}>
          <Box
            p={1}
            style={{
              width: '100%',
              overflow: 'auto',
              whiteSpace: 'nowrap',
            }}
            id="top"
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {tableHeaders.map((header) => (
                <>
                  <Box
                    p={1}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography
                      style={{width: 120, paddingLeft: 8, paddingRight: 8}}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {header}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
            <Typography variant="h6" style={{position: 'absolute'}}>
              Long Table Title Here That Doesnt Scroll
            </Typography>

            <Box style={{display: 'flex', flexDirection: 'row'}}>
              {tableData.map((data) => (
                <>
                  <Box pt={5} pl={2} pr={2} pb={1}>
                    <Typography style={{width: 120}} variant="subtitle2">
                      {data}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
            <Typography variant="h6" style={{position: 'absolute'}}>
              Long Table Title Here That Doesnt Scroll
            </Typography>
            <Box pt={4} style={{display: 'flex', flexDirection: 'row'}}>
              {tableData.map((data) => (
                <>
                  <Box pt={1} pl={2} pr={2} pb={1}>
                    <Typography style={{width: 120}} variant="subtitle2">
                      {data}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
