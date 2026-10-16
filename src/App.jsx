import { useState } from 'react';
import Exam1 from './exams/Exam1';
import Exam2 from './exams/Exam2';
import Exam3 from './exams/Exam3';
import Exam4 from './exams/Exam4';
import Exam5 from './exams/Exam5';
import Exam6 from './exams/Exam6';

const EXAMS = [
  { n: 1, hook: 'useState', Component: Exam1 },
  { n: 2, hook: 'useEffect', Component: Exam2 },
  { n: 3, hook: 'useRef', Component: Exam3 },
  { n: 4, hook: 'useContext', Component: Exam4 },
  { n: 5, hook: 'useMemo, useCallback', Component: Exam5 },
  { n: 6, hook: 'useReducer', Component: Exam6 },
];

function App() {
  const [current, setCurrent] = useState(1);
  const ActiveExam = EXAMS.find((e) => e.n === current).Component;

  return (
    <div className="app">
      <nav>
        {EXAMS.map(({ n, hook }) => (
          <button
            key={n}
            className={current === n ? 'active' : ''}
            onClick={() => setCurrent(n)}
          >
            <span>Exam {n}</span>
      
          </button>
        ))}
      </nav>

      <main className="exam">
        <ActiveExam />
      </main>
    </div>
  );
}

export default App;