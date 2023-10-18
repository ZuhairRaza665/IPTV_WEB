import React from "react";

const LoadingSpinner = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const spinnerDotStyle = {
    border: "4px solid rgba(0, 0, 0, 0.3)",
    borderTop: "4px solid #007bff", // Change the color to your desired color
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    animation: "spin 1s linear infinite",
  };

  // Define the keyframes animation using JavaScript template literals
  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={spinnerStyle}>
      <div style={spinnerDotStyle}></div>
      {/* Include the keyframes animation using a <style> tag */}
      <style>{keyframesStyle}</style>
    </div>
  );
};

export default LoadingSpinner;
