import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get(`https://67f8d9cd2466325443ee11a1.mockapi.io/distributors/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://67f8d9cd2466325443ee11a1.mockapi.io/distributors/${id}`, form);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sửa Distributor</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Tên" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="phone" placeholder="SĐT" value={form.phone} onChange={handleChange} required />
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditScreen;
