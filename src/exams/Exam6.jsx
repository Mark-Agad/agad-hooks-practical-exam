import { useState } from 'react';
import { issueReducer, initialState } from './issueReducer';
import { usePersistentReducer } from './usePersistentReducer';

function Exam6() {
  const [state, dispatch] = usePersistentReducer(
    issueReducer,
    initialState,
    'issue-tracker-state'
  );
  const [title, setTitle] = useState('');

  const allCount = state.issues.length;
  const openCount = state.issues.filter((issue) => !issue.done).length;
  const doneCount = state.issues.filter((issue) => issue.done).length;

  const visibleIssues = state.issues.filter((issue) => {
    if (state.filter === 'open') return !issue.done;
    if (state.filter === 'done') return issue.done;
    return true;
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch({ type: 'ADD_ISSUE', payload: { title } });
    setTitle('');
  };

  return (
    <div>
      <h1>Issue Tracker</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Issue</button>
      </form>

      <div>
        <button
          onClick={() =>
            dispatch({ type: 'SET_FILTER', payload: { filter: 'all' } })
          }
          disabled={state.filter === 'all'}
        >
          All ({allCount})
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'SET_FILTER', payload: { filter: 'open' } })
          }
          disabled={state.filter === 'open'}
        >
          Open ({openCount})
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'SET_FILTER', payload: { filter: 'done' } })
          }
          disabled={state.filter === 'done'}
        >
          Done ({doneCount})
        </button>
      </div>

      <ul>
        {visibleIssues.map((issue) => (
          <li key={issue.id}>
            <span
              style={{ textDecoration: issue.done ? 'line-through' : 'none' }}
            >
              {issue.title}
            </span>{' '}
            <button
              onClick={() =>
                dispatch({ type: 'TOGGLE_ISSUE', payload: { id: issue.id } })
              }
            >
              Toggle
            </button>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_ISSUE', payload: { id: issue.id } })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch({ type: 'CLEAR_DONE' })}>
        Clear Done
      </button>
    </div>
  );
}

export default Exam6;