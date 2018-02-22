import React from "react";


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    let { id, title, content } = this.props.note;
    return (
      <li className="note-item">
          {title}: {content}
        <button id={this.props.note.id}
          type="click"
          onClick={this.props.handleRemoveNote}
          >
          Delete
        </button>
      </li>
    );
  }
}

export default NoteItem;
