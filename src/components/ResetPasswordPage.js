import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setErr('');

    try {
      const res = await axios.post(`http://localhost:5000/api/users/reset-password/${token}`, { newPassword });
      setMsg(res.data.message);
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      setErr(err.response?.data?.message || 'Reset failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button type="submit">Reset Password</button>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
      {err && <p style={{ color: 'red' }}>{err}</p>}
    </form>
  );
};

export default ResetPasswordPage;
