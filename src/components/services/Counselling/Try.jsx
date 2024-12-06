// import React from 'react'
import ReactFlow, { Background } from 'react-flow-renderer';

const elements = [
    { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 150, y: 5 } },
    { id: '2', data: { label: 'Step 1' }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: 'Step 2' }, position: { x: 250, y: 200 } },
    { id: '4', data: { label: 'End' }, position: { x: 150, y: 300 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
  ];

const Try = () => {
    return (
        <div style={{ height: '400px' }}>
          <ReactFlow elements={elements} style={{ width: '100%', height: '100%' }}>
            <Background color="#888" gap={16} />
          </ReactFlow>
        </div>
      );
}

export default Try