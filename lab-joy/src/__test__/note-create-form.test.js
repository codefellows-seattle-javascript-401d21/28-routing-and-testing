import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });
import NoteCreateForm from '../component/note/note-create-form';

describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);
    expect(mountedNoteCreateForm.state('title')).toEqual('');
    expect(mountedNoteCreateForm.state('content')).toEqual('');
  });
});