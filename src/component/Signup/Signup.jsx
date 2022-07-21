import React, { useState } from 'react'
import signup from '../../assets/signup.jpg'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = (props) => {
    const host = "https://notezia.herokuapp.com";
    const [form, setForm] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    //Handle Submit Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = form;
        const response = await fetch(`${host}/api/auth/createuser`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();

        console.log(json);
        if (json.success) {
            //Save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            navigate("/");
            toast.success('Account Created Successfully', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.error('Invalid Credentials', {
                position: "top-center",
                theme: "colored",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    //Handle On Change 
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container-fluid col-md-10 px-4 py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-lg-start">
                        <img src={signup} className='img-fluid' alt="" srcset="" />
                    </div>
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" value={form.name} name="name" placeholder="name@example.com" onChange={handleOnChange} required />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" value={form.email} name="email" placeholder="name@example.com" onChange={handleOnChange} required />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" value={form.password} minLength={5} name="password" placeholder="Password" onChange={handleOnChange} required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="cpassword" value={form.cpassword} minLength={5} name="cpassword" placeholder="Confirm Password" onChange={handleOnChange} required />
                                <label htmlFor="cpassword">Confirm Password</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit" >Sign Up</button>
                            <hr className="my-4" />
                            <small className="text-muted">By clicking Sign Up, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                theme="colored"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>

    )
}

export default Signup