import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    //for show password
    const [showPassword, setShowPassword] = useState(false);
    //for error
    const [error, setError] = useState("");
    //for form data
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: name, email: email, password: password, confirmPassword: confirmPassword });
      setName("")
    }
//for email validation
    function handleEmailChange(e) {
        const value = e.target.value;
        // simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        // optional: check valid or not
        if (emailRegex.test(value)) {
            setEmail(value);
            setError("");
        } else {
            setError("invalid email")
        }
    }


    return (
        <div className='container my-2 border p-5 bg-light' >

            <h1>User registration form </h1>
            <form action="" className='form-control' onsubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className='form-control'  onChange={handleEmailChange} />
                </div>
                {error && <h5 variant="danger">{error}</h5>}
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <div className='d-flex justify-content-between align-items-center '>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" className='form-control mx-2' onChange={(e) => setPassword(e.target.value)} /> 
                    <button type='button' className='btn btn-secondary' onClick={()=>setShowPassword(!showPassword)}>Show</button>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className='btn btn-primary' >Register</button>
            </form>
            <div className='mt-3'>
                <h2>Form Data</h2>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Password: {formData.password}</p>
                <p>Confirm Password: {formData.confirmPassword}</p>
            </div>
        </div>
    )
}

export default UserForm