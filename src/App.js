import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from './screens/Tasks/Counter/Counter.js';
import Todo from './screens/Tasks/Todo/Todo';
import Home from './screens/Home/Home';

const App = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        </Routes>
    </div>
    </Router>
  
  );
}

export default App;
