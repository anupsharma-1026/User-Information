import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
    const navigate=useNavigate();

    const{userID}=useParams();
    return (
        <>
        <button type="submit" class="btn btn-denger">Delete</button>
        <button type="submit" class="btn btn-warning">Cancel</button>
        
        </>
    );
};

export default Delete;