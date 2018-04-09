import React from 'react';
// import NoteCreateForm from '../note-create/index';
// import NoteList from '../note-list/index';

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='section-title'>Welcome to this wonderful little app to help you take notes for you next trip to the grocery store!</h1>
            </div>
        );
    }
}

export default Landing;