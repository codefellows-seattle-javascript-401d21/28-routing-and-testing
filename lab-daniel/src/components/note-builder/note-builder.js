import React from 'react';

class NoteBuilder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, content, id } = this.props.note;
    return (<li className="note"><section><h2>{title}</h2><p>{content}</p></section><button id={id} onClick={this.props.remove}>Remove</button></li>);
  }
}

export default NoteBuilder;