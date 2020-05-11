import React from 'react';
import ReactDOM from 'react-dom';
import {Pie} from 'react-chartjs-2';

const data = {
  labels: ['Approval', 'Draft', 'Pending', 'Pulled Back'],
  datasets: [
    {
      data: [24, 13, 53, 10],
      backgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8', '#F7D000'],
      hoverBackgroundColor: ['#75CBB6', '#018ECD', '#DCEDC8', '#F7D000'],
    },
  ],
  text: '23%',
};

class ApprovalStatusChart extends React.Component {
  render() {
    return (
      <div style={{position: 'relative', width: '80%', height: '80%'}}>
        <Pie data={data} />
      </div>
    );
  }
}

ReactDOM.render(<ApprovalStatusChart />, document.getElementById('root'));
export default ApprovalStatusChart;
