import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext';



export const AddNote = () => {

    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:" ", description:" ", tag:"dafault"})
    const handleClick = (e)=> {
        e.preventDefault()
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e)=>{
            setNote({...note,[e.target.name]: [e.target.value]})
    }
  return (
    <div>
        <h1>Add notes</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name='title'
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            onChange={onChange}
          />

        </div>
        <div className="form-group">
          <label htmlFor="descriptiom" >description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name='description'
            placeholder="description"
            onChange={onChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add note
        </button>
      </form>
    </div>
  )
}
