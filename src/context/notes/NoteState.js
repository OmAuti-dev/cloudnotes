import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "67110c7e2cc44d765c786a13",
          "user": "67100ab21d430ee921bc534e",
          "title": "new first title",
          "description": "wake kjfsfkup early",
          "tag": "personal",
          "date": "1729170558970",
          "__v": 0
        },
        {
          "_id": "671110cd02cc44d765c786a1b",
          "user": "67100ab21d430ee921bc534e",
          "title": "new second title",
          "description": "wake kjfsfkup earlvdfvy",
          "tag": "personal",
          "date": "1729170640504",
          "__v": 0
        },
        {
            "_id": "67110c7e23cc44d765c786a13",
            "user": "67100ab21d430ee921bc534e",
            "title": "new first title",
            "description": "wake kjfsfkup early",
            "tag": "personal",
            "date": "1729170558970",
            "__v": 0
          },
          {
            "_id": "67110c7e26cc44d765c786a13",
            "user": "67100ab21d430ee921bc534e",
            "title": "new first title",
            "description": "wake kjfsfkup early",
            "tag": "personal",
            "date": "1729170558970",
            "__v": 0
          },
          
      ]
      const [notes, setNotes] = useState(notesInitial)

      //Add a note
      const addNote = (title, description,tag)=>{
        //TODO: API call
        console.log("adding a new note")
       const note = {
            "_id": "67110c7e2cc44d765c786a13",
            "user": "67100ab21d430ee921bc534e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1729170558970",
            "__v": 0
          }
        setNotes(notes.concat(note))
      }
      //Delete a Note
      const deleteNote = ()=>{

      }
      //Edit a Note
      const editNote = ()=>{


      }


    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;