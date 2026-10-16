export const initialState = {
  issues: [],
  filter: 'all',
  nextId: 1,
};

export function issueReducer(state, action) {
  switch (action.type) {
    case 'ADD_ISSUE':
      return {
        ...state,
        issues: [
          ...state.issues,
          { id: state.nextId, title: action.payload.title, done: false },
        ],
        nextId: state.nextId + 1,
      };

    case 'TOGGLE_ISSUE':
      return {
        ...state,
        issues: state.issues.map((issue) =>
          issue.id === action.payload.id
            ? { ...issue, done: !issue.done }
            : issue
        ),
      };

    case 'DELETE_ISSUE':
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id !== action.payload.id),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload.filter,
      };

    case 'CLEAR_DONE':
      return {
        ...state,
        issues: state.issues.filter((issue) => !issue.done),
      };

    default:
      return state;
  }
}