import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith("handle")) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleAddNote(this.state);
    this.setState({
      title: "",
      content: ""
    });
  }

  handleChange(event) {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="note-create-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          // rows="1"
          // cols="20"
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

export default NoteForm;
