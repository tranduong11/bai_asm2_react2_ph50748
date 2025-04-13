import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateScreen = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://67f8d9cd2466325443ee11a1.mockapi.io/distributors', form);
      navigate('/');
    } catch (error) {
      console.error('Lỗi khi thêm distributor:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Thêm Distributor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <button type="submit">Lưu</button>
        <button type="button" onClick={() => navigate('/')}>Hủy</button>
      </form>
    </div>
  );
};

export default CreateScreen;
