import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Box, CardHeader, Divider} from '@material-ui/core';
import ProgramTotals from './ProgramTotals';
import Pagination from '@material-ui/lab/Pagination';
// import TowerReviewSubTabs from './TowerReviewSubTabs';
import TowerReviewApproveProgramsModal from './TowerReviewApproveProgramsModal';
import TowerReviewProgramsAll from './TowerReviewProgramsAll';

export default function TowerReviewBody() {
  return (
    <>
      <Grid container>
        <Divider />
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
                  <Box display="flex" justifyContent="flex-end">
                    <TowerReviewApproveProgramsModal />
                  </Box>
                </>
              }
            />
          </Box>
          <Divider />
          <TowerReviewProgramsAll />
          {/* <TowerReviewSubTabs /> */}
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Pagination count={1} color="secondary" />
          </Box>
          <ProgramTotals />
        </Grid>
      </Grid>
    </>
  );
}
