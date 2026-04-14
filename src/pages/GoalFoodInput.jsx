import React from 'react';

export default function GoalFoodInput() {
  return (
    <div className="page-container">
      <h1>Log Food & Goals</h1>
      <p>What are we eating today?</p>
      
      <div className="card mt-4">
        <input type="text" placeholder="Search for food..." className="input-field" />
        <button className="btn-primary mt-2">Submit</button>
      </div>
    </div>
  );
}
