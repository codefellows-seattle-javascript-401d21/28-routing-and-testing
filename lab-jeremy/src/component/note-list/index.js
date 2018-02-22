import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    
  }
  
  render(){
    return(
      <div>
        <ul>
          {
            this.props.notesArr.map((note) =>
              <NoteItem note={note} key={note.id} remove={this.props.remove}/>
            )
          }
        </ul>
      </div>
    );

  }
}

export default NoteList;