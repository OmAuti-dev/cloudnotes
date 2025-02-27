import React from "react";
import NoteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div >
          <i className="fa-solid fa-trash mx-1"></i>
          <i className="fa-regular fa-pen-to-square mx-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
