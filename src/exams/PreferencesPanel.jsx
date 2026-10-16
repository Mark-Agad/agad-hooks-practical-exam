import { usePreferences } from './PreferencesContext';

function PreferencesPanel() {
  const { theme, fontSize, setFontSize } = usePreferences();

  return (
    <div>
      <h3>Preferences Panel</h3>
      <p>Current theme: {theme}</p>
      <p>Current font size: {fontSize}px</p>
      <button onClick={() => setFontSize(14)}>14px</button>
      <button onClick={() => setFontSize(16)}>16px</button>
      <button onClick={() => setFontSize(18)}>18px</button>
    </div>
  );
}

export default PreferencesPanel;