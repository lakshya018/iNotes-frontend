import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import login from '../../assets/login.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {

    const host = "https://notezia.herokuapp.com";
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" })
    //Handle Submit Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: form.email, password: form.password })
        });

        const json = await response.json();

        console.log(json);
        

        if (json.success) {
            //Save the auth token and redirect
           
            localStorage.setItem("loginStatus",true);
            localStorage.setItem("token", json.authToken);
            navigate("/");
            
            
            
        }
        else {
            toast.error('Invalid Credentials');
        }
    }

    //Handle On Change 
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container-fluid col-md-10 px-4 ">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-lg-start">
                        <img src={login} className='img-fluid' alt="" srcset="" />
                    </div>
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" value={form.email} name="email" placeholder="name@example.com" onChange={handleOnChange} required />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" value={form.password} name="password" placeholder="Password" onChange={handleOnChange} required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit" >Log in</button>
                            <hr className="my-4" />
                            <small className="text-muted">By clicking Log In, you agree to the terms of use.</small>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                theme= "colored"
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

export default Login
