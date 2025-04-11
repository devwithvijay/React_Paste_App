import React, { useState } from 'react';
import './NoteInput.css';

function NoteInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your note here..."
      ></textarea>
      <button onClick={handleSubmit}>Create Paste</button>
    </div>
  );
}

export default NoteInput;