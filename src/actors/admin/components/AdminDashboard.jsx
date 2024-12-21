import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [carListings, setCarListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, carListingsResponse] = await Promise.all([
          fetch('http://localhost:8000/api/admin/users', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }),
          fetch('http://localhost:8000/api/admin/car-listings', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }),
        ]);

        if (!usersResponse.ok || !carListingsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const usersData = await usersResponse.json();
        const carListingsData = await carListingsResponse.json();

        setUsers(usersData);
        setCarListings(carListingsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/users">User List</Link></li>
          <li><Link to="/admin/cars">Car List</Link></li>
        </ul>
      </nav>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <h2>Car Listings</h2>
      <ul>
        {carListings.map(car => (
          <li key={car.id}>{car.make} {car.model} - {car.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
