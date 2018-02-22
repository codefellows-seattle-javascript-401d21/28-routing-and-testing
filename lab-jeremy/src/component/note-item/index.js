import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    
  }
  
  render(){
    return(
      <div>
        <ul>
          {
            <li className="note" >
              {this.props.note.title}: {this.props.note.content}
              <button id={this.props.note.id} onClick={this.props.remove}>Delete</button>
            </li>
          }
        </ul>
      </div>
    );

  }
}

export default NoteItem;