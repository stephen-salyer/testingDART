import React from 'react';
import ReactDOM from 'react-dom';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Approval', 'Draft', 'Pending', 'Pulled Back'],
  datasets: [
    {
      backgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8', '#F7D000'],
      hoverBackgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8', '#F7D000'],
      data: [13, 12, 72, 3],
    },
  ],
};

class ApprovalStatusChart extends React.Component {
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

ReactDOM.render(<ApprovalStatusChart />, document.getElementById('root'));
export default ApprovalStatusChart;
