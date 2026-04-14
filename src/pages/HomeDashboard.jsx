import React from 'react';

export default function HomeDashboard() {
  return (
    <div className="page-container">
      <h1>Home Dashboard</h1>
      <p>Welcome to your Living Curator experience.</p>
      
      <div className="card mt-4">
        <h3>Daily Vitals</h3>
        <p>Calories: 1200 / 2000</p>
        <button className="btn-primary mt-2">Log Meal</button>
      </div>
    </div>
  );
}
