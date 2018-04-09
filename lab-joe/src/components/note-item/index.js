import React from 'react';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="note-item">
                <h3>{this.props.note.title}</h3>
                <p>{this.props.note.content}</p>
                <button id={this.props.note.id} type="button" onClick={this.props.handleRemoveNote}>
                    delete from the list
        </button>
            </li>
        );
    }
}

export default NoteItem;