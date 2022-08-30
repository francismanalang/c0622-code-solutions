import React from 'react';
import ReactDom from 'react-dom/client';

function CustomButton() {
  return <button>Click Me!</button>;
}

const container = document.querySelector('#root');
const button = <CustomButton />;
const root = ReactDom.createRoot(container);
root.render(button);
