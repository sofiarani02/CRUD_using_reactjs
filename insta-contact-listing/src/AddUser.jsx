import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate} from 'react-router-dom';

function AddUser({addUserHandler}) {
    const [user, setUser] = useState({
        id: 0,
        name: "",
        instaId: ""
    });

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        addUserHandler(user);
        setUser({id:0, name:"", instaId:""});
        navigate("/");
    }

    const navigate = useNavigate();

    const{name, instaId} = user;
  return (
    <div>
        <Header heading="Add Intsagram Contact"/>
        <dir className='container'>
            <Link to="/">
                <button type='button' className='btn btn-primary'>Back</button>
            </Link>
            <form onSubmit={onFormSubmitted} className='mt-3'>
                <label htmlFor="name" className='form-label'>
                    Name:{""}
                </label>
                <br />
                <input type="text" id='name' name='name' className='form-control' onChange={inputChangeHandler} />
                <br />
                <br />
                <label htmlFor="instaId" className='form-label'>
                    Insta ID:{""}
                </label>
                <br />
                <input type="text" id='instaId' name='instaId' className='form-control' onChange={inputChangeHandler} />
                <br />
                <br />
                <div className='container'>
                    <div className='card-body'>
                        <div className='card-header'>
                            <h2>Instagram user to be added:</h2>
                        </div>
                        <div className='card-text'>
                            <div style={{color:"red" }}>Name: {name}</div>
                            <div style={{color:"red" }} className='mt-3 mb-3'>Insta_Id: {instaId}</div>
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn btn-success'>Add</button>
            </form>
        </dir>
    </div>
  )
}

export default AddUser