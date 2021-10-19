import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Nav from '../components/Nav';

const Home = (props: { authenticated: boolean }) => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                })

                const user = await response.json();
                setEmail(user.email);
            }
        )();
    });

    if (!props.authenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <Nav setAuthenticated={() => {}}/>
            <div className="form-center">
                <h3>Olá, {email}</h3> 
                você está autenticado? 
                <p>{props.authenticated ? "SIM" : "NÃO" }</p>
            </div>
        </div>
    );
};

export default Home;