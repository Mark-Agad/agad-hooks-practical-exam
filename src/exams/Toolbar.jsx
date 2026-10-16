import { usePreferences } from './PreferencesContext';

function Toolbar() {
  const { theme, setTheme, fontSize } = usePreferences();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <h3>Toolbar</h3>
      <p>Theme: {theme}</p>
      <p>Font size: {fontSize}px</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Toolbar;