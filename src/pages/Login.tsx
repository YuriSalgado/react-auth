import React, { SyntheticEvent, useState } from 'react';
import './Login.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Login = (props: { authenticated: boolean, setAuthenticated : (authenticated: boolean) => void }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })

    const authorized = await response.json();
    if (authorized.message === "success") {
      props.setAuthenticated(true);
    }
    
  }

  if (props.authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="">    
      <form className="form-center text-center" onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" placeholder="eve.holt@reqres.in" required
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" placeholder="cityslicka" required
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <div className="checkbox mb-3">
          <label>
            <Link to="/register" className="nav-link">Register</Link>
          </label>
        </div>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </div>
  );
};

export default Login;