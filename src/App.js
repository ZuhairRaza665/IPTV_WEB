import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BoredHandLoadingAnimation from "./BoredHandLoadingAnimation";
import { seprateData } from "./apiData";

const LoginPage = ({ onApiFetched }) => {
  const [url, setUrl] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Track the error message
  const navigate = useNavigate();
  let channelData = [];

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.outerWidth);
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Clear any previous errors
    try {
      const response = await axios.get(url); // Use axios to make a GET request

      if (response.status === 200 && url.length > 0) {
        const data = response.data;
        const lines = data.split("\n");

        let currentIndex = 0;

        while (currentIndex < lines.length) {
          if (lines[currentIndex].startsWith("#EXTINF:-1,")) {
            const title = lines[currentIndex].substring(10).trim().substring(1);
            const link = lines[currentIndex + 1].trim();
            const overview = null;
            const poster = null;
            const year = null;

            channelData.push({
              title,
              link,
              overview,
              poster,
              year,
            });
          }

          currentIndex++;
        }

        console.log("Channel data: ", channelData[100]);
        seprateData(channelData);

        onApiFetched();
        navigate("/home");
      } else {
        console.error("HTTP request failed with status:", response.status);
        setError("An error occurred while fetching data."); // Set error message
      }
    } catch (error) {
      console.log("response url: ", url);
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data."); // Set error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0B0B0B",
        height: screenHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isLoading ? (
        <BoredHandLoadingAnimation />
      ) : (
        <>
          <h2 style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
            Enter URL
          </h2>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={handleUrlChange}
            placeholder="http://example.com"
            required
            style={{
              width: window.innerWidth > 1000 ? 0.3 * window.innerWidth : "70%",
              padding: "10px",
              border: "2px solid white",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
              marginBottom: "10px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              borderRadius: "5px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginTop: "20px",
            }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Login"}
          </button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default LoginPage;
