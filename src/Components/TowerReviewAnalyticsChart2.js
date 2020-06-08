import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Rebate'],
  datasets: [
    {
      backgroundColor: ['#75CBB6'],
      hoverBackgroundColor: ['#75CBB6'],
      data: [100],
    },
  ],
};

class TowerReviewAnalyticsChart2 extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: '80%',
          minWidth: 425,
          maxWidth: 425,
        }}
      >
        <Pie
          data={state}
          options={{
            responsive: true,
            legend: {
              display: true,
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

export default TowerReviewAnalyticsChart2;
