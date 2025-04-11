import React from 'react';
import Note from './Note';
import './NoteList.css';

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;