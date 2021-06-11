import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import AddPage from './AddPage';


export default function App() {
  const [add, setAdd] = useState(false);
  const [notes, setNotes] = useState([]);

  function handleAdd() {
    setAdd(!add);
  }

  function alterNotes(adjustedNotes) {
    setNotes(adjustedNotes);
  }

  if (add) {
    return(
      <AddPage return = {handleAdd} setNotes = {setNotes}/>
    )
  } else {
    return (
      <HomePage add = {handleAdd} notes = {notes} setNotes = {alterNotes}/> 
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'));