import React from 'react';

const LanguageSelect = ({ language, setLanguage }) => {
  const languages = ['Python', 'JavaScript', 'Java', 'C++']; // Add more as needed

  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
