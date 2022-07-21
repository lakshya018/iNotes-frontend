import React from 'react'
// import NoteContext from '../../context/notes/noteContext';
// import Notes from '../Notes/Notes';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hero from '../../assets/hero.jpg'
const Home = (props) => {
    const loginStatus = localStorage.getItem('loginStatus');
    if (loginStatus === true) {
        toast.success('Logged in Successfully');
        localStorage.setItem('loginStatus', false);
    }
    return (
        <div className=''>
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center  py-5">
                    <div className="col-10 col-md-6 m-auto">
                        <img src={hero} className="img-fluid" alt="Bootstrap Themes" />
                    </div>
                    <div className="col-md-6 ">
                        <h1 className="display-5 fw-bold lh-1 mb-3">iNotes Web Application For making Notes</h1>
                        <p className="lead text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed praesentium odit numquam a ea minus obcaecati distinctio voluptates, non aut ipsa laudantium itaque nihil dolorem quod ullam. Quo ducimus odit nisi quae, et necessitatibus itaque tenetur eos, rem voluptates esse.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link role="button" className="btn btn-primary btn-lg px-4 me-md-2" to="/login">Get Started</Link>
                        </div>
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
                pauseOnHover />
        </div>



    )
}

export default Home;