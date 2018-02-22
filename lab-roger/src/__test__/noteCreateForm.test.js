import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import NoteCreateForm from '../components/note-create-form/index';

describe('Dashboard', () => {
 it('should test the initial state', () => {
   expect(Enzyme.mount(<NoteCreateForm />).state('title')).toEqual('');
   expect(Enzyme.mount(<NoteCreateForm />).state('content')).toEqual('');
  
   
 })

})