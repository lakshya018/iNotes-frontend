import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../../context/notes/noteContext';
import AddNote from '../AddNote/AddNote';
import NoteItem from '../NoteItem/NoteItem';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    let navigate = useNavigate();

    useEffect(() => {
        // if (localStorage.getItem('token')) {
            getNotes();
        // }
        // else {
        //     navigate("/login");
        // }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const refClose = useRef(null);
    //Update Note Function
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    //Handle Click Function 
    const handleClick = () => {

        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        toast.success('Updated Successfully');

    }

    //Handle On Change 
    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }


    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card-body">
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} placeholder="Note Title" onChange={handleOnChange} minLength={3} required />
                                </div>
                                <div className="form-group my-2">
                                    <textarea className="form-control" id="edescription" name="edescription" value={note.edescription} rows="3" placeholder="Text goes here" onChange={handleOnChange} minLength={5} required></textarea>
                                </div>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} placeholder="Tag" onChange={handleOnChange} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h1 className="mt-5">Your Notes</h1>
                    <hr />
                    <div className="container text-center">
                        {notes.length === 0 && 'No Notes to Display. Add a Note!'}
                    </div>

                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                    })}
                </div>

            </div>

            {/* <ToastContainer /> */}
        </>

    )
}

export default Notes;