// Button.test.js
import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

test('Button render', () => {
  const component = renderer.create(
    <Button onPress={() => console.log('Button clicked')}>Click me</Button>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});