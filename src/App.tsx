import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        
        <main>
          <Route path="/" exact component={() => <Home authenticated={authenticated} />} />
          <Route path="/login" component={() => <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
