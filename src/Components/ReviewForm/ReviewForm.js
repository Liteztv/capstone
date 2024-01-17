import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReviewForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.npoint.io/9a5543d36f1460da2f63');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to update reviewGiven status
  const updateReviewGiven = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, reviewGiven: true } : item
      )
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120vh' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Leave a Review</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.speciality}</td>
              <td>
                <Link to='/GiveReviews'>
                  <button>Click Here</button>
                </Link>
              </td>
              <td>{item.reviewGiven ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;

