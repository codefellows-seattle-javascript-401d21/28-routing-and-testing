import React from 'react';
import NoteItem from '../note-item/index';
class NoteList extends React.Component{


  render(){
    return(
        <ul>
        {
          this.props.notes.map((note,index) =>
            <NoteItem title={note.title} content={note.content} key={index}/>
          )
        }
      </ul>
    );
  }
}
export default NoteList;