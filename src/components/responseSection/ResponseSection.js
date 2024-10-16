import React from 'react';
import "./ResponseSection.css"
function ResponseSection({ responseData }) {
  console.log(responseData);

  return (
    <div className="response-section">
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre> // Use <pre> for formatting and JSON.stringify for proper indentation
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default ResponseSection;
