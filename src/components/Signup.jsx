import React, { useState } from 'react';

function Signup({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Enter valid email');
      return;
    }
    if (password.length < 6) {
      alert('Password min 6');
      return;
    }
    alert('Signed up');
  };

  return (
    <main className="card">
      <div className="brand">
        <div className="logo">S</div>
        <div>
          <h1>SkillSwap</h1>
          <p>Learn & Share Skills with People Like You</p>
        </div>
      </div>

      <h2>Join SkillSwap</h2>
      <p className="lead">Sign up to start learning and sharing skills today.</p>

      <form id="loginForm" onSubmit={submit}>
        <div className="field">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            required
          />
        </div>
        <div className="field">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            minLength={6}
          />
        </div>
        <button className="btn-primary" type="submit">
          Sign up
        </button>
      </form>

      {onBack && (
        <div style={{ marginTop: '12px' }}>
          <button className="btn back-btn" onClick={onBack}>
            ⬅ Back to Home
          </button>
        </div>
      )}
    </main>
  );
}

export default Signup;