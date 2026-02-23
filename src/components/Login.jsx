import React, { useState } from 'react';

function Login({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    alert('Signed in');
  };

  return (
    <main className="card">
      <div className="brand">
        <div className="logo">S</div>
        <div>
          <h1>SkillSwap</h1>
          <p>Sign in to continue</p>
        </div>
      </div>

      <h2>Welcome back</h2>
      <p className="lead">Use your account to access your dashboard.</p>

      <form id="loginForm" onSubmit={submit}>
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
          Sign in
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

export default Login;