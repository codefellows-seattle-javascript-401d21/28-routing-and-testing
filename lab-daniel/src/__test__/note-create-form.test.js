import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({ adapter: new Adapter() });

import noteCreateForm from '../components/note-create-form/note-create-form';

describe('Dashboard', () => {
  it('Tests Initial State', () => {
    let mountedDash = Enzyme.mount(<Dashboard />);
    expect(mountedDash.state('title').toEqual([]));
  });
});