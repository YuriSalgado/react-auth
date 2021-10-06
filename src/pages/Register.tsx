import React from 'react';

const Register = () => {
    return (
        <form>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
                <input type="text" className="form-control" placeholder="name lastname" />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    );
};

export default Register;