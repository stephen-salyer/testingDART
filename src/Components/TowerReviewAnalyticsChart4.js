import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Gross Sales', 'Payment Incentive', 'Net Invoice Sales'],
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
      data: [-40, 30, 10],
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
            },
          }}
        />
      </div>
    );
  }
}

export default TowerReviewAnalyticsChart4;
