import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your App</h1>
      <p>Get started with your tasks and goals!</p>
      <div className="button-container">
        <Link to="/todo" className="home-button">
          Create Todo List
        </Link>
        <Link to="/counter" className="home-button">
          Counter
        </Link>
        <Link to="/chart" className="home-button">
          Chart
        </Link>
      </div>
    </div>
  );
};

export default Home;
