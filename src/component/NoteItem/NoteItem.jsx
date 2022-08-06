import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NoteItem.css';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (

        <div className="col-md-3 ">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title note-title">{note.title}</h5>
                        <div className="icons">
                            <i className="fa fa-edit mx-2 editBtn" onClick={() => {
                                updateNote(note);

                            }}></i>
                            <i className="fa-solid fa-trash-can mx-2 deleteBtn" onClick={() => {
                                deleteNote(note._id);
                                toast.success('Note Deleted Successfully', {
                                    position: "top-center",
                                    autoClose: 2000,
                                    theme:"colored",
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
                            }}></i>
                        </div>

                    </div>
                    <small className='note-tag mb-2'>#{note.tag}</small>
                    <p className="card-text note-description">{note.description}</p>

                </div>
            </div>
        </div>


    )
}

export default NoteItem;
