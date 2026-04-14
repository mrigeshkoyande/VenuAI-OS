import React from 'react';

export default function AiAnalysisResults() {
  return (
    <div className="page-container">
      <h1>AI Analysis Results</h1>
      
      <div className="card mt-4">
        <h3 style={{color: 'var(--tertiary)'}}>Smart Insight</h3>
        <p>You've consumed 40% of your daily protein target. Consider adding lean chicken or lentils to your next meal.</p>
        <button className="btn-primary mt-2">Adjust Plan</button>
      </div>
    </div>
  );
}
