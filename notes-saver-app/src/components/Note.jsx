import React from 'react';
import './Note.css';

function Note({ note, onDelete }) {
  return (
    <div className="note">
      <pre>{note.content}</pre>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default Note;
