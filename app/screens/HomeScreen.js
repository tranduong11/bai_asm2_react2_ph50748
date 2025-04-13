import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDistributors, deleteDistributor } from '../actions/distributorActions';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const distributorState = useSelector((state) => state.distributors);
  const { items, loading, error } = distributorState;

  useEffect(() => {
    dispatch(fetchDistributors());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
      dispatch(deleteDistributor(id));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách Distributors</h1>
      <button onClick={() => navigate('/create')}>+ Thêm mới</button>
      {loading && <p>Đang tải...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && items.length === 0 && <p>Không có dữ liệu</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <strong>{item.name}</strong>
            <br />
            <button onClick={() => navigate(`/detail/${item.id}`)}>Chi tiết</button>
            <button onClick={() => navigate(`/edit/${item.id}`)}>Sửa</button>
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
