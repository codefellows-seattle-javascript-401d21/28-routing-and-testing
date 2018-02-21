import React from 'react';

class NoteItem extends React.Component{



  render(){
    return(
        <li>{this.props.title}:{this.props.content}
        <button type='submit'> delete </button>
        </li>
    );
  }
}
export default NoteItem;