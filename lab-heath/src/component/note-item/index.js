import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {console.log(this.props.note)}
        {console.log(this.props.handleRemoveNotes)}
        <h4>{this.props.note.title}</h4>
        <h6>{this.props.note.publishedOn.toString()}</h6>
        <p>{this.props.note.content}</p>
        <button
          type='button'
          value={this.props.note.id}
          onClick={this.props.handleRemoveNotes}
        >delete</button>
    </div>
    );
  }
}

export default NoteItem;