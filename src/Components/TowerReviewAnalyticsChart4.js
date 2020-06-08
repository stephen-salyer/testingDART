import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Draft', 'Pending Approval', 'Approved'],
  datasets: [
    {
      backgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8'],
      hoverBackgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8'],
      data: [40, 30, 30],
    },
  ],
};

class TowerReviewAnalyticsChart1 extends React.Component {
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

export default TowerReviewAnalyticsChart1;
