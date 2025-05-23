import React, { useContext, useState } from 'react';
import {AuthContext} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const{ setIsLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const validEmail = 'sagar@gmail.com';
    const validPassword = 'sagar';

    const handleLogin =(e)=>{
        e.preventDefault();
        if(email===validEmail&&password===validPassword){
            setIsLogin(true);
            navigate('/dashboard');
        }else{
            alert("failed");
        }
    }

    return (
        <section className="vh-100">
            <div className='container-fluid p-0 m-0 h-100 w-100'>
                <div className="row  h-100 w-100 p-0 m-0">
                    <div className='col-6 col-md-6 mx-auto my-auto'>
                        <div className='row mx-auto my-auto w-100 vh-100 justify-content-center position-relative'>
                            <div className='mx-auto my-auto text-center w-75'>
                                <h1 className='auto-text font-weight-bold '>Bank Settlement<br/> System</h1>

                                <div
                                    className="div-logo position-absolute start-50 translate-middle-x"
                                    style={{ bottom: '1rem' }}  
                                >
                                    <img
                                        src="navbarlogo.png"
                                        className='image-fluid'
                                        style={{ width: '300px', height: 'auto !important' }} 
                                        alt="Bank Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='login-container d-flex justify-content-center align-items-center col-6 col-md m-0 p-0 '>
                        <div className='login-wrapper d-flex justify-content-center align-items-center w-50 h-75 '>
                            <div className='w-75'>
                                <h1 className="text-left mb-4">Login</h1>
                                <form className='d-flex flex-column gap-0' onSubmit={handleLogin}>
                                    <p className='text-white text-bold'>Sign in to Your Account</p>
                                    <div className='mb-4'>
                                        <label htmlFor="Email" className="form-label">Email address</label>
                                        <input type="email" placeholder="Enter Email" className="form-control" 
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                        id="Email" aria-describedby="emailHelp"></input>
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="Password" className="form-label">Password</label>
                                        <input type="password" placeholder="Enter Password" 
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                        className="form-control" id="Password"></input>
                                    </div>
                                    <button className='btn btn-danger w-100 mt-4'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;