/* eslint-env node, mocha */

import Component from '../../src/js/components/home.jsx';
import TestUtils from 'react-dom/test-utils';
import React from 'react';

describe('Given an instance of the Component', () => {
  var component;

  describe('when we render the component', () => {
    beforeEach(() => {
      component = TestUtils.renderIntoDocument(<Component />);
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
    });
  });
});
