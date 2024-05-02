import React, { useState, useEffect } from 'react';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://server.duinocoin.com/users/pravigya');
        const data = await response.json();
        setUserData(data.result.balance);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        marginLeft: '200px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {userData ? (
        <div
          style={{
            width: '1000px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            color: '#333', // Text color black
          }}
        >
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Welcome back, {userData.username}!</h2>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>Balance: {userData.balance}</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>Created: {userData.created}</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>Last Login: {new Date(userData.last_login * 1000).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
