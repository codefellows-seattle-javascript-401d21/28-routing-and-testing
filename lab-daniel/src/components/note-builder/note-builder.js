import React from 'react';

class NoteBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, description, id } = this.props.note;
    return (<li className="note"><h2>{title}</h2><p>{description}</p><button id={id} onClick={this.props.remove}>Remove</button></li>);
  }
}

export default NoteBuilder;