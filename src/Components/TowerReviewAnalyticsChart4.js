import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: [
    'Gross Sales',
    'Trade Incentive',
    'Other Off-Invoice',
    'Payment Incentive',
    'Net Invoice Sales',
    'GTM Rebate',
    'Grower Incentives',
    'Discretionary Guarentee/Performance Claims',
    'Net Sales',
    'SG&A Program',
    'Net Proceeds',
  ],
  datasets: [
    {
      backgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8', '#018ECD', '#018ECD'],
      hoverBackgroundColor: [
        '#75CBB6',
        '#018ECD',
        '#DCEDC8',
        '#018ECD',
        '#018ECD',
      ],
      data: [-40, 0, 0, 30, 10],
    },
  ],
};

class TowerReviewAnalyticsChart4 extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <Bar
          data={state}
          options={{
            responsive: true,
            legend: {
              display: false,
              position: 'bottom',
              labels: {
                boxWidth: 20,
                padding: 20,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default TowerReviewAnalyticsChart4;
