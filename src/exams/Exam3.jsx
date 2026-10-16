import { useState, useRef } from 'react';

function Exam3() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [previousEmail, setPreviousEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const prevEmailRef = useRef('');


  const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  if (name.trim() === '') {
    newErrors.name = 'Name is required.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = 'Enter a valid email like name@example.com.';
  }

  if (password.length < 8) {
    newErrors.password = 'Password must be at least 8 characters.';
  }

  setErrors(newErrors);

  if (newErrors.name) {
  nameRef.current.focus();
} else if (newErrors.email) {
  emailRef.current.focus();
} else if (newErrors.password) {
  passwordRef.current.focus();
}

if (Object.keys(newErrors).length === 0) {
  setPreviousEmail(prevEmailRef.current);
  prevEmailRef.current = email;
}

};

  return (
    <div>
      <h1>Accessible Form Toolkit</h1>
      <form onSubmit={handleSubmit}>
        {previousEmail && <p>Previous submitted email: {previousEmail}</p>}
        <div>
          <label htmlFor="name">Name</label>
          
          <input
            id="name"
            type="text"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
      
    </div>
  );
}

export default Exam3;