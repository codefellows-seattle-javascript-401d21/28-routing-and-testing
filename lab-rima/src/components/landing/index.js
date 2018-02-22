import React from 'react';


class Landing extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="landing-description">
        <h2>To Do List</h2>
        <p>This is a place you can manage your ToDo!</p>
      </div>
    );
  }
}

export default Landing;
