import { Col,Row,Container } from "react-bootstrap";
import recat, { useState } from "react";


// function Sigenupform() {
//     const [fname , setfname] = useState("");
//     const [email, setemail] = useState("");
//     const [contactno, setcontactno] = useState("");
//     const [password, setpassword] =useState("");
//     const [conformpassword, setconformpassword] = useState("");
//     const [formdata, setformdata] = useState({
//         fname: "",
//         email: "",
//         contactno: "",
//         password: "",
//         conformpassword: ""
//     });
//     //for error
//     const [error, setError] = useState("");
//     const handlesubmit = (e) => {e.preventDefault();
//         setformdata({fname: fname, email: email, contactno: contactno, password: password, conformpassword: conformpassword})
//         setfname(""), setemail(""), setfname(""), setcontactno(""),setpassword(""),setconformpassword("")
//      };

//           //for show password
//          const [showPassword, setShowPassword] = useState(false);
//         const [showCpassword, setshowCpassword] = useState(false);
//      //for email validation
//     const [emailError, setEmailError] = useState("");
//     const [ContactError, setContactError] = useState("");

// function handleEmailChange(e) {
//     const value = e.target.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

//     setemail(value);   // ✅ Always update input

//     if (!value) {
//         setEmailError("Email is required");
//     } else if (!emailRegex.test(value)) {
//         setEmailError("Invalid email format");
//     } else {
//         setEmailError("");
//     }

// }
//    ///contact number validate
// function handelcontactnum(e){
//     const value=e.target.value
 
//   const numberRegex = /^[0-9]*$/; // only numbers
//    setcontactno(value)
//   if (!numberRegex.test(value)) {
//     setContactError("Only numbers allowed");
//     return;
//   }

//   if (value.length > 10) {
//     setContactError("Maximum 10 digits allowed");
//     return;
//   }
// }
    
//     return(
// <Container className=" my-2 border p-5 bg-light"  >
//     <Row>
//     <Col md={6} >    
//       <h1>User registration form </h1> 
//         <form action="" className='form-control' onSubmit={handlesubmit}>
//             <div className='form-group'>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" value={fname} id="name" name="fname" placeholder="Fname"  className='form-control' onChange={(e) => setfname(e.target.value)} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" value={email} id="email" name="email" placeholder="Email id"  className='form-control' onChange={handleEmailChange}  />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="ContactNo">Contact Number</label>
//                 <input type="number" value={contactno} id="contactno" name="contactno" placeholder="Contact Number"     className='form-control' onChange={handelcontactnum }  />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor="password">Password</label>
//                 <input type={showPassword ? "text" : "password"} value={password} id="password" name="password" placeholder="password"  className='form-control' onChange={(e)=>setpassword(e.target.value)}  />
//                 <button type='button' className='btn btn-secondary' onClick={()=>setShowPassword(!showPassword)}>Show</button>
//              </div>
//             <div className='form-group'>
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input type={showCpassword ? "text" : "password"} value={conformpassword} name="confirmPassword" placeholder="Conform password"  className='form-control' onChange={(e)=>setconformpassword(e.target.value)}  />
//                 <button type='button' className='btn btn-secondary' onClick={()=>setshowCpassword(!showCpassword)}>Show</button>
//             </div>
//             <button type="submit" className='btn btn-primary mt-2' >Register</button>
//         </form>  
// </Col>
// <Col md={6} className="mt-4">
// <h1 className="border-bottom pb-2">User detailes </h1>
// <p>Name:{formdata.fname} </p>
// <p>Email:{formdata.email} </p>
// <p>Contact Number:{formdata.contactno} </p>
// <p>Password:{formdata.password} </p>
// <p>Confirm Password:{formdata.conformpassword} </p>   
// </Col>
//     </Row>

      

// </Container>
//     )
// };

function Sigenupform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation (only letters)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Contact validation (10 digits)
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{0,10}$/.test(formData.contact))  {
      newErrors.contact = "Contact must be 10 digits";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save data to right side
    setUserData(formData);
    setIsSubmitted(true)
    setErrors({});

    // Clear form
    setFormData({
      name: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <Container className='container my-2 border p-5 bg-light' >
      <Row>
        {/* Left Side Form */}
        <Col md={6}>
          <h2 className="border-bottom">User Registration Form</h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-danger">{errors.name}</small>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-danger">{errors.email}</small>
            </div>

            {/* Contact */}
            <div className="mb-3">
              <label>Contact Number</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                maxLength={10}
                className="form-control"
              />
              <small className="text-danger">{errors.contact}</small>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label>Password</label>
              <div className="d-flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  Show
                </button>
              </div>
              <small className="text-danger">{errors.password}</small>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label>Confirm Password</label>
              <div className="d-flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  Show
                </button>
              </div>
              <small className="text-danger">
                {errors.confirmPassword}
              </small>
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </Col>

        {/* Right Side User Details */}
        <Col md={6}>
          <h2 className="border-bottom pb-1">User Details</h2>
          {userData && (
            <>
              <p><strong>Name:</strong> {userData.name || ""}</p>
              <p><strong>Email:</strong> {userData.email  || ""}</p>
              <p><strong>Contact:</strong> {userData.contact  || ""}</p>
              <p><strong>Password:</strong> {userData.password  || ""}</p>
              
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}


export default Sigenupform;

