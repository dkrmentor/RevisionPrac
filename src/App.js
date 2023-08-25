import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from './screens/Tasks/Counter/Counter.js';
import Todo from './screens/Tasks/Todo/Todo.js';
import Home from './screens/Home/Home.js';
import Chart from './screens/Tasks/AllChart/Chart.js';


const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/chart" element={ <Chart /> } />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </div>
    </Router>
  
  );
}

export default App;
