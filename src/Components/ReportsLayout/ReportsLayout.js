import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReportsLayout = () => {

const [data, setData] = useState([]);

useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.npoint.io/9a5543d36f1460da2f63');
            const resutl = await response.json();
            const dataWithIds = result.map((item, index) => ({...item, id: index}));
            setData(dataWithIds);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120vh' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.speciality}</td>
              <td>

              </td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>


);


};

export default ReportsLayout;