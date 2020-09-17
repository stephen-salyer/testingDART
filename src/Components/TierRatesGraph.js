import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: [
    'Incentive 1',
    'Incentive 2',
    'Incentive 3',
    'Incentive 4',
    'Incentive 5',
  ],
  datasets: [
    {
      backgroundColor: ['#75CBB6', '#018ECF', '#FFCE56', '#DCEDC2', '#FF849D'],
      hoverBackgroundColor: [
        '#75CBB6',
        '#018ECF',
        '#FFCE56',
        '#DCEDC2',
        '#FF849D',
      ],
      data: [88, 2, 1, 1, 8],
    },
  ],
};

class TierRatesGraph extends React.Component {
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

export default TierRatesGraph;
