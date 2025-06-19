import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setErr('');

    try {
      const res = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
      setMsg(res.data.message);
    } catch (err) {
      setErr(err.response?.data?.message || 'Error sending reset email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
      <button type="submit">Send Reset Link</button>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
      {err && <p style={{ color: 'red' }}>{err}</p>}
    </form>
  );
};

export default ForgotPasswordPage;
