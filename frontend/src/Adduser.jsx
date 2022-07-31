import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Adduser = () => {


  const navigate = useNavigate();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobileNo, setmobileNo] = useState();
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();


    const dataObj = {
      firstName, lastName, mobileNo, password
    }
    console.log(dataObj);
    axios.post("http://localhost:5000/user", dataObj);     //send data object
    setfirstName("");
    setlastName("");
    setmobileNo(0);
    setpassword("");
    navigate("/Home");    //go to home page use navigate
  }

  return (

    <>
      <form onSubmit={submitHandler}>
        <div class="row1">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setfirstName(e.target.value)} value={firstName} />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setlastName(e.target.value)} value={lastName} />
          </div>
          <div class="col">
            <input type="number" class="form-control" placeholder="Mobile Number" aria-label="Mobile Number" onChange={(e) => setmobileNo(e.target.value)} value={mobileNo} />
          </div>
          <div class="col">
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e) => setpassword(e.target.value)} value={password} />
          </div>
          <button type="submit" class="btn btn-primary">submit</button>

        </div>


      </form>

    </>
  );
};

export default Adduser;