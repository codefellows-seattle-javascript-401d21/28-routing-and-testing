import React from 'react'

class NoteItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    <li className="note">
                        <h2>{this.props.note.title}</h2>
                        <p>{this.props.note.content}</p>
                        <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>Remove Note</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NoteItem;


