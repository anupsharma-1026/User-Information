import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {

    const navigate = useNavigate();

    const{userID}=useParams();
    console.log(userID);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [mobileNo, setmobileNo] = useState();
    const [password, setpassword] = useState("");

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                setfirstName(rawData.firstName);
                setlastName(rawData.lastName);
                setmobileNo(rawData.mobileNo);
                setpassword(rawData.password);
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();


        const dataObj = {
            firstName, lastName, mobileNo, password
        }
        console.log(dataObj);
        axios.put(`http://localhost:5000/user/${userID}`, dataObj);     //send data object

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

export default Edit;