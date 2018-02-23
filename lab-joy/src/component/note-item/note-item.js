import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>[<a id={this.props.note.id} onClick={this.props.remove}>&times;</a>] {this.props.note.title}: {this.props.note.content}</li>
      </div>
    );

  }
}

export default NoteItem;
