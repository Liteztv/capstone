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
        // Add an ID property to each doctor based on the array index
        const dataWithIds = result.map((item, index) => ({ ...item, id: index }));
        setData(dataWithIds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to update reviewGiven status and disable the button
  const updateReviewGiven = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, reviewGiven: true, buttonDisabled: true } : item
      )
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120vh' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Speciality</th>
            <th>Leave a Review</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.speciality}</td>
              <td>
                <Link to='/GiveReviews' target="_blank">
                  {item.buttonDisabled ? null : (
                    <button onClick={() => updateReviewGiven(item.id)}>
                      Click Here
                    </button>
                  )}
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

