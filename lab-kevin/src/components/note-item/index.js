'use strict';

import React from 'react';

class Note_item extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className="note-list-item">
        <h3></h3>
        <p></p>
        <button>Tip the Boat Over</button>
      </li>
    );
  }
}

export default Note_item;