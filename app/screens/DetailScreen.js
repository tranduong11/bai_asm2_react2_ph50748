import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [distributor, setDistributor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDistributor = async () => {
      try {
        const res = await axios.get(`https://67f8d9cd2466325443ee11a1.mockapi.io/distributors/${id}`);
        setDistributor(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
        setLoading(false);
      }
    };
    fetchDistributor();
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!distributor) return <p>Không tìm thấy distributor.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chi tiết Distributor</h2>
      <p><strong>ID:</strong> {distributor.id}</p>
      <p><strong>Tên:</strong> {distributor.name}</p>
      <p><strong>Email:</strong> {distributor.email}</p>
      <button onClick={() => navigate('/')}>Quay lại</button>
    </div>
  );
};

export default DetailScreen;
