import { PreferencesProvider } from './PreferencesContext';
import Dashboard from './Dashboard';

function Exam4() {
  return (
    <PreferencesProvider>
      <h1>Application Preferences</h1>
      <Dashboard />
    </PreferencesProvider>
  );
}

export default Exam4;