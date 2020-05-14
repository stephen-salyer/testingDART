import React from 'react';
import ReactDOM from 'react-dom';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Not Started', 'Pending', 'Approved'],
  datasets: [
    {
      backgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8'],
      hoverBackgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8'],
      data: [13, 12, 72],
    },
  ],
};

class ApproverChart extends React.Component {
  render() {
    return (
      <div style={{position: 'relative', width: '100%'}}>
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

ReactDOM.render(<ApproverChart />, document.getElementById('root'));
export default ApproverChart;
