import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import { AddNote } from './AddNote';

export const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, addNote } = context;
  return (
    <>
    <AddNote />
    <div className='row my-3'>
      <h1>Your notes</h1>
      {notes.map((note)=>{
        return <Noteitem note={note}/>
      })}
    </div>
    </>
  )
}
