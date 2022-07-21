import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "https://notezia.herokuapp.com";
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);
    const [user , setUser] = useState([]);
    //Get All Notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            
          });

        const json = await response.json();
       
        setNotes(json);
    }


    //Add Note
    const addNote = async (title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag}) 
          });
        const note = await response.json();
        setNotes(notes.concat(note));
    }


    // Delete Note
    const deleteNote = async (id) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
          });
        
        
        
       
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    //Edit Note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag}) 
          });
        
       
       
        let newNotes = JSON.parse(JSON.stringify(notes));
        //Logic to edit in Client
        for (let index = 0; index<newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
            
        }
        setNotes(newNotes);
    }

    //Get User Details
    const getUser = async () => {
        //API CALL
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST', 
            headers: {
              'auth-token': localStorage.getItem('token')
            } 
          });
        
        const json = await response.json();
      
        setUser(json);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, user, getUser }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
