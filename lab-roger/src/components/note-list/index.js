import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component {
  constructor(props){
    super(props);
   
  }
  render() {
    return (
      <ul className='notes-list'>
        {
          this.props.notes.map((note, index) => {
          
            return(
             <NoteItem 
             note={note} 
             delete_note={this.props.delete_note} 
             update_note={this.props.update_note}
             key={note.id} 
             />
            )  
          })
          
        }
      </ul>
    );
  }
};

export default NoteList;