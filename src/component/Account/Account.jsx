import React, { useContext, useEffect } from 'react'
import NoteContext from '../../context/notes/noteContext';
import './Account.css';
import {Link} from 'react-router-dom';

const Account = () => {
    const context = useContext(NoteContext);
    const { user, getUser, notes, getNotes } = context;

    useEffect(() => {
        getNotes();
        getUser();
        // eslint-disable-next-line
    }, [])

   

    return (
        <div className='container mt-5'>
            <div className="card align-items-center text-center shadow-lg p-3 mb-5 bg-body rounded">
                <img src="https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png" className='card-img-top m-3 profile-img'  alt="..." />
                    <div className="card-body">
                        <h1 className="card-title m-2">{user.name}</h1>
                        <a className='m-3 user-email' href={`mailto:${user.email}`}>{user.email}</a>
                        <br/>
                        <h3 className='m-3'>Total Notes: <span className='total-notes'>{notes.length}</span></h3>
                        <Link to="/notes" className="btn btn-primary view-all-notes m-3">View All Notes</Link>
                    </div>
            </div>
        </div>
    )

}


export default Account;