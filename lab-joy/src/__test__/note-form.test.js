import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });
import NoteForm from '../component/note-form/note-form';

describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedNoteForm = Enzyme.mount(<NoteCreateForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
    expect(mountedNoteForm.state('content')).toEqual('');
  });
});