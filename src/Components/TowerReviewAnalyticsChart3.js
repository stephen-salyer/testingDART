import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Activity', 'Volume'],
  datasets: [
    {
      backgroundColor: ['#75CBB6', '#018ECD'],
      hoverBackgroundColor: ['#75CBB6', '#018ECD'],
      data: [80, 20],
    },
  ],
};

class TowerReviewAnalyticsChart3 extends React.Component {
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

export default TowerReviewAnalyticsChart3;
