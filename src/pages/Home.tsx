import React, { useEffect, useState } from 'react';

const Home = () => {
    const [name, setName] = useState();

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
        <div>
            {name ? 'Hi ' + name : 'You are not logged in!'}
        </div>
    );
};

export default Home;