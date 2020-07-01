import React from 'react';
import 'typeface-roboto';
import {Grid, CardHeader, Divider, Box} from '@material-ui/core';
import TowerReviewAnalyticsChart1 from './TowerReviewAnalyticsChart1';
import TowerReviewAnalyticsChart2 from './TowerReviewAnalyticsChart2';
import TowerReviewAnalyticsChart3 from './TowerReviewAnalyticsChart3';
import TowerReviewAnalyticsInput from './TowerReviewAnalyticsInput';
import TowerReviewFinancialCalculatorSave from './TowerReviewFinancialCalculatorSave';

const chartColumns = [
  {
    mediumSize: 4,
    title: 'Program Summaries',
    data: <TowerReviewAnalyticsChart1 />,
    display: 'flex',
  },
  {
    mediumSize: 4,
    title: 'Payment Methods',
    data: <TowerReviewAnalyticsChart2 />,
    display: 'flex',
  },
  {
    mediumSize: 4,
    title: 'Incentive Types',
    data: <TowerReviewAnalyticsChart3 />,
    display: 'flex',
  },
  {
    mediumSize: 12,
    title: 'Financial Data Input',
    data: <TowerReviewAnalyticsInput />,
    display: 'block',
    saveButton: <TowerReviewFinancialCalculatorSave />,
  },
];

export default function TowerReviewAnalytics() {
  return (
    <>
      <Grid container spacing={3}>
        {chartColumns.map(
          ({title, data, mediumSize, display, saveButton}, i) => (
            <Grid item key={i} xs={12} md={mediumSize}>
              <Box display="flex" justifyContent="space-between">
                <CardHeader title={title}></CardHeader>
                {saveButton}
              </Box>
              <Divider />
              <Box
                pt={2}
                display={display}
                flexDirection="column"
                alignItems="center"
              >
                {data}
              </Box>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
}
