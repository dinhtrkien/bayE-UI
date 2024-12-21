import React, { useState, useEffect } from 'react';

const CarList = () => {
  const [carListings, setCarListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarListings = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/admin/cars', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch car listings');
        }

        const data = await response.json();
        setCarListings(data.cars);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarListings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 bg-gray-100">
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <a href="/admin/users">User List</a>
          </li>
          <li>
            <a href="/admin/cars">Car List</a>
          </li>
        </ul>
      </aside>
      <main className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Car Listings</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {carListings.map(car => (
                <tr key={car.CarID}>
                  <td>{car.MakeID}</td>
                  <td>{car.ModelID}</td>
                  <td>{car.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CarList;
