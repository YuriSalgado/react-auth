import React, { useEffect, useState } from 'react';
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

    return (
        <div>
            <Nav authenticated={props.authenticated} setAuthenticated={() => {}}/>
            <div className="form-center">
                <h3>Olá, {email}</h3> 
                você está autenticado? 
                <p>{props.authenticated ? "SIM" : "NÃO" }</p>
            </div>
        </div>
    );
};

export default Home;