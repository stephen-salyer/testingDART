import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Net', 'Discounts'],
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
      data: [-40, 30],
    },
  ],
};

class TowerReviewAnalyticsChart5 extends React.Component {
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

export default TowerReviewAnalyticsChart5;
