import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch(`http://localhost:8000/api/user`, {
                  headers: {'Content-Type': 'application/json'},
                  credentials: 'include'
              });

              const content = await response.json();

              setName(content.email);
          }
      )();
  }, []) // If you want to control when effect is to be executed after mounting the component

  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name}/>
        
        <main className="form-center">
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
