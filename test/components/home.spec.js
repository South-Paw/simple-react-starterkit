/* eslint-env node, mocha */
import React from 'react';
import TestUtils from 'react-dom/test-utils';

import Home from '../../src/js/components/home.jsx';

describe('Given an instance of the Home component', () => {

  describe('when the component is rendered', () => {

    it('it should contain a paragraph', () => {
      const component = TestUtils.renderIntoDocument(<Home />);

      let paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
    });
  });
});
