import React from 'react';
import { renderIf } from '../../../lib/utils';


class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.item ? this.props.item : {};
  //props(arguemnts) is whats beig passed down state is whats being chsnged on the current level.
  }
  render() { 
    return ( 
      <div>
        <li className="note-item" id={this.props.item._id}>
          <h2>{this.state.title}</h2>
          <p >{this.state.content}</p>
        </li>
        <button className="delete-note" type="button" value={this.props.item._id} onClick={this.props.handleRemove}>Delete Note</button>
      </div>
    );
  }
}
export default NoteItem;
