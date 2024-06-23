import React, { useState } from 'react';
import PromptInput from './components/PromptInput';
import LanguageSelect from './components/LanguageSelect';
import CodeDisplay from './components/CodeDisplay';
import DownloadButton from './components/DownloadButton';
import GuideDisplay from './components/GuideDisplay';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('Python');
  const [code, setCode] = useState('');
  const [guide, setGuide] = useState('');

  const generateCode = async () => {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCv1EjddKiZXunt2tCig1O1XKOsGbLxRpA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ]
        }),
      });
      const data = await response.json();
      if (data.error) {
        console.error('Error generating code:', data.error.message);
      } else {
        setCode(data.code);  // Adjust based on actual response structure
        setGuide(data.guide);  // Adjust based on actual response structure
      }
    } catch (error) {
      console.error('Error generating code:', error);
    }
  };

  const downloadZip = () => {
    // Implement the logic to download the zip file
  };

  return (
    <div className="App">
      <h1>Code Generator</h1>
      <PromptInput prompt={prompt} setPrompt={setPrompt} />
      <LanguageSelect language={language} setLanguage={setLanguage} />
      <button onClick={generateCode}>Generate Code</button>
      <CodeDisplay code={code} />
      <GuideDisplay guide={guide} />
      <DownloadButton onClick={downloadZip} />
    </div>
  );
}

export default App;
