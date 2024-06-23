import React from 'react';

const CodeDisplay = ({ code }) => {
  return (
    <div>
      <h2>Generated Code:</h2>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
