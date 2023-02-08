import React from 'react';
import Note from './Note';

function Stickynote() {

    //array
    const notesData = [
        {title:'title #1', content:'text content #1'},
        {title:'title #2', content:'text content #2'},
        {title:'title #3', content:'text content #3'},
    ]

    //map
    const notes = notesData.map((note, index) => <Note key={index} title={note.title} content={note.content}/>)

  return (
    <ul>
        //render const
        {notes}
    </ul>
  )
}


export default Stickynote;
