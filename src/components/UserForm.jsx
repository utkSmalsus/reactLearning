import React, { useState } from 'react'

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: name, email: email, password: password, confirmPassword: confirmPassword});
        
    }
  

  return (
    <div className='container my-2 border p-5 bg-light' >

        <h1>User registration form </h1> 
        <form action="" className='form-control'>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className='form-control' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className='form-control' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Register</button>
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