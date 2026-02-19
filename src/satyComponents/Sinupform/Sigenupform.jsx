import { Col,Row,Container } from "react-bootstrap";
import recat, { useState } from "react";


function Sigenupform() {
    const [fname , setfname] = useState("");
    const [email, setemail] = useState("");
    const [contactno, setcontactno] = useState("");
  
    const [password, setpassword] =useState("");
    const [conformpassword, setconformpassword] = useState("");
    const [formdata, setformdata] = useState({
        fname: "",
        email: "",
        contactno: "",
        password: "",
        conformpassword: ""
    });

    const handlesubmit = (e) => {
        e.preventDefault();
        setformdata({fname: fname, email: email, contactno: contactno, password: password, conformpassword: conformpassword})
    };
    return(
<Container className=" my-2 border p-5 bg-light" >
    <Row>
    <Col md={6} >    
      <h1>User registration form </h1> 
        <form action="" className='form-control'>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="fname" placeholder="Fname"  className='form-control' onChange={(e) => setfname(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email id"  className='form-control' onChange={(e)=> setemail(e.target.value)}  />
            </div>
            <div className='form-group'>
                <label htmlFor="ContactNo">Contact Number</label>
                <input type="number" id="contactno" name="contactno" placeholder="Contact Number" required    className='form-control' onChange={(e)=>setcontactno(e.target.value) }  />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="password"  className='form-control' onChange={(e)=>setpassword(e.target.value)}  />
            </div>
            <div className='form-group'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Conform password"  className='form-control' onChange={(e)=>setconformpassword(e.target.value)}  />
            </div>
            <button type="submit" className='btn btn-primary mt-2' onClick={handlesubmit} >Register</button>
        </form>  
</Col>
<Col md={6} className="mt-4">
<h1 className="border-bottom pb-2">User detailes </h1>
<p>Name:{formdata.fname} </p>
<p>Email:{formdata.email} </p>
<p>Contact Number:{formdata.contactno} </p>
<p>Password:{formdata.password} </p>
<p>Confirm Password:{formdata.conformpassword} </p>   
</Col>
    </Row>

      

</Container>
    )
};
export default Sigenupform;