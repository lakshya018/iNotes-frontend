import React, { useContext, useState } from 'react'
import NoteContext from '../../context/notes/noteContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
   
    //Handle Click Function 
    const handleClick = () => {
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        toast.success('Added Successfully');
    }

    //Handle On Change 
    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container mt-2">
                <h1>Welcome To Magic Notes</h1>
                <div className="card">
                    <div className="card-body">
                        <h4 className=" my-2 card-title">Add a Note</h4>
                        <div className="form-group my-2">
                            <input type="text" className="form-control" id="title" name="title" value={note.title} placeholder="Note Title" onChange={handleOnChange} minLength={3} required />
                        </div>
                        <div className="form-group my-2">
                            <textarea className="form-control" id="description" name="description" value={note.description} rows="3" placeholder="Text goes here" onChange={handleOnChange} minLength={5} required></textarea>
                        </div>
                        <div className="form-group my-2">
                            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} placeholder="Tag" onChange={handleOnChange} />
                        </div>
                        <button disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-warning" id="addBtn" onClick={handleClick}>Add Note</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default AddNote;
