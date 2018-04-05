import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteCreateForm from '../components/note-create-form/index';


describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedForm = Enzyme.mount(<NoteCreateForm />);

    expect(mountedForm.state('title')).toEqual('');
    expect(mountedForm.state('content')).toEqual('');
  });
});
