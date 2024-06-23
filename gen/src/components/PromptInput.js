import React from 'react';

const PromptInput = ({ prompt, setPrompt }) => {
  return (
    <div>
      <label htmlFor="prompt">Enter your prompt:</label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default PromptInput;
