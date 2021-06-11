import React, {useState} from 'react';
import './AddPage.css';

export default function AddPage(props) {

    const [title, setTitle] = useState('');

    const [note, setNote] = useState('');

    function handleChange({target}) {
        setTitle(target.value);
    }

    function handleNote({target}) {
        setNote(target.value);
    }

    function handleSubmit() {   
        props.setNotes((prev) => {
            return [...prev, {title: title, note: note}];
        }); 
        props.return();
    }

    return(
        <div>
            <h1>Add a new note</h1>
            <form>
                <label for = 'title'>Title:</label> <br />
                <input type = 'text' id = 'title' value = {title} onChange = {handleChange} placeholder = 'Enter title'/> <br />
                <label for = 'note'>Enter note:</label> <br />
                <input type = 'text' id = 'note' value = {note} onChange = {handleNote} placeholder = 'Enter note'/> <br />
                <br />
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}