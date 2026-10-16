import { usePreferences } from './PreferencesContext';
import Toolbar from './Toolbar';
import PreferencesPanel from './PreferencesPanel';
import ArticlePreview from './ArticlePreview';

function Dashboard() {
  const { theme } = usePreferences();

  const style = {
    background: theme === 'dark' ? '#222' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '16px',
  };

  return (
    <div style={style}>
      <h2>Dashboard</h2>
      <Toolbar />
      <PreferencesPanel />
      <ArticlePreview />
    </div>
  );
}

export default Dashboard;