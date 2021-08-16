import React from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'/>
      </BrowserRouter>

    </div>
  );
}

export default App;
