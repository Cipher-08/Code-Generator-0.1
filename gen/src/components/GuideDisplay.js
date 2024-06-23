import React from 'react';

const GuideDisplay = ({ guide }) => {
  return (
    <div>
      <h2>Setup Guide:</h2>
      <pre>
        <code>{guide}</code>
      </pre>
    </div>
  );
};

export default GuideDisplay;
