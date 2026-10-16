import { useState, useEffect } from 'react';

const USERS = [
  { id: 1, name: 'Ana Cruz', role: 'Developer' },
  { id: 2, name: 'Ben Lim', role: 'Designer' },
  { id: 3, name: 'Cara Yu', role: 'Tester' },
  { id: 4, name: 'Dan Go', role: 'Developer' },
  { id: 5, name: 'Eugene Busico', role: 'Master Developer' }
];

function Exam2() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(USERS);
const [seconds, setSeconds] = useState(0);

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    const filtered = USERS.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, 500);

  return () => clearTimeout(timeoutId);
}, [query]);

useEffect(() => {
  document.title = `${results.length} results`;
}, [results.length]);

useEffect(() => {
  const intervalId = setInterval(() => {
    setSeconds((s) => s + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

  return (
    <div>
      <h1>Live Search and Timer</h1>
      <p>Elapsed seconds: {seconds}</p>
      <input
        type="text"
        placeholder="Search users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exam2;