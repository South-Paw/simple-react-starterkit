import React, { Component } from 'react';

/**
 * The root of your application, from whence the magic begins!
 *
 * If you're just starting out with React, have a read through the official React tutorial over here:
 *  https://facebook.github.io/react/tutorial/tutorial.html#overview
 */
class Home extends Component {

  /**
   * Remember - in your render method you are writing JSX, not HTML - so some things are a little different.
   *
   * Refer to the official React docs here for a good overview on JSX:
   *  https://facebook.github.io/react/docs/introducing-jsx.html
   */
  render() {
    return (
      <div className='container'>
        <h1 className='mt-3'>simple-react-starterkit</h1>
        <p><strong>Awesome.</strong> If you're seeing this; that means you're ready to go.</p>
        <p>While running the <code>npm run dev</code> command, every time you make a change webpack will recompile the
          <code>src</code> folder.</p>
        <p>You can then reload this page (<kbd>f5</kbd> or <kbd>ctrl</kbd> + <kbd>f5</kbd> to cache bust) and your app
          will reload with the new build.</p>
        <p>At this stage,</p>
        <ul>
          <li>you may want to check the project's README for some next steps (I've also included some notes on other
            stuff there as well)</li>
          <li>or just start building and breaking stuff</li>
        </ul>
        <p>Good luck!</p>
        <p className='links mb-0'>
          <a href='https://github.com/South-Paw/simple-react-starterkit' target='_blank'>Project Github</a>
          &nbsp;|&nbsp;
          <a href='https://facebook.github.io/react/tutorial/tutorial.html#overview' target='_blank'>React Tutorial</a>
          &nbsp;|&nbsp;
          <a href='http://sass-lang.com/guide' target='_blank'>Sass Guide</a>
        </p>
      </div>
    );
  }
}

export default Home;
