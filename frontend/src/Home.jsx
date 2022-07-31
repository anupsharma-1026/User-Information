import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/user")
            .then(async (res) => {
                const rawData = await res.data;
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            <NavLink exect to="/Adduser">
                <button type="button" class="btn btn-primary add">Add User</button>
            </NavLink>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sr.no</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">MobNumber</th>
                        <th scope="col">EditUser</th>
                        <th scope="col">DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((row, key) => {
                        const srNo = key + 1;
                        return (
                            <tr>
                                <th scope="row">{srNo}</th>
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                                <td>{row.mobileNo}</td>
                                <td><NavLink exect to={`/Edit/${row._id}`}>
                                    <button type="button" class="btn btn-primary">Edit user</button>
                                </NavLink></td>

                                <td><button type="button" class="btn btn-primary">Delete</button></td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>


        </>
    );
};

export default Home;