import React from 'react';

export default function ProfileSettings() {
  return (
    <div className="page-container">
      <h1>Profile & Settings</h1>
      
      <div className="card mt-4">
        <h3>Personal Details</h3>
        <p>Weight Goal: Maintain</p>
        <p>Diet: Vegetarian</p>
        <button className="btn-primary mt-2">Edit</button>
      </div>
    </div>
  );
}
