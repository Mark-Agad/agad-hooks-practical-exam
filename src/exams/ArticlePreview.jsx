import { usePreferences } from './PreferencesContext';

function ArticlePreview() {
  const { theme, fontSize } = usePreferences();

  const style = {
    background: theme === 'dark' ? '#444' : '#f2f2f2',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '12px',
    fontSize: `${fontSize}px`,
  };

  return (
    <div style={style}>
      <h3>Article Preview</h3>
      <p>
        This is a sample article. Its look will follow the {theme} theme at{' '}
        {fontSize}px.
      </p>
    </div>
  );
}

export default ArticlePreview;