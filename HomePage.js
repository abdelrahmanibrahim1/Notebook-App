import React, {useEffect, useState} from 'react';
import './HomePage.css';

export default function HomePage({add, notes, setNotes}) {
    const [search, setSearch] = useState('');
  
    function handleChange({target}) {
      setSearch(target.value);
    }

    function handleDelete({target}) {
      const adjustedNotes = notes.filter((note) => {
        return note.title !== target.value;
      })
      setNotes(adjustedNotes);
    }

    function MapNotes() {
     const changedNotes = notes.filter((note) => {
      if (search === '') {
        return note;
      } else if (note.title.toLowerCase().includes(search.toLowerCase())) {
        return note;
      }
    }).map((note) => {
        return(
          <div>
            <h4 className = 'title'>Title: {note.title}</h4>
            <p>Note written: {note.note}</p>
            <button onClick = {handleDelete} 
            key = {note.title} 
            value = {note.title}
            className = 'delete'
            >Delete Note</button>  
          </div>
        )
      });
      return changedNotes;
    }
  
    return(
      <div>
        <h1 id = 'main'>Notebook</h1>
        <form>
          <label for = 'search'>Search elements in the notebook by title:</label> <br />
          <input type = 'text' id = 'search' value = {search} onChange = {handleChange} placeholder = 'Search...'/> <br />
          <br />
          <label for = 'add'>Add a note: </label> <br/>
          <button onClick = {add} className = 'add'>+</button>
        </form>
        <h3>Current Notes</h3>
        <MapNotes />
      </div>
    )
}