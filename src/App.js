import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { PUZZLES } from './puzzles';
import Puzzle from './components/Puzzle';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {PUZZLES.map((puzzle, index) => (
          <Route
          key={index}
          path={`/puzzle/${puzzle.urlText}`}
          element={<Puzzle puzzle={puzzle} />}
        />
        ))}
        <Route path="/"
        element={
          <div className="container">
            <h1>Mike and Bren's Famous Amos Roasty Toasty Scavenger Escape Room Extravaganza</h1>
            <ul>
              {PUZZLES.map((puzzle, index) => (
                <li key={index}>
                  <Link to={`/puzzle/${puzzle.urlText}`}>{puzzle.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        }/>
      </Routes>
    </Router>
  );
};

export default App;
