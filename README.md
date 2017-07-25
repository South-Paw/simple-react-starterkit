# simple-react-starterkit

Welcome to my simple react starter kit. The goal of this project is to provide you with a template that's easy for
anyone to start a React project with and then also enabling you to begin extending it as needed and of course, as you
learn.

I've also tried to structure it in a way that it can be stand alone or dropped/moved into another project and act
solely as the front-end of that application (such as a Node.js or PHP application) however if you're a beginner;
don't worry about that part.

## What's it got?

`simple-react-starterkit` provides a environment for you to start writing a React application in - if you haven't had
the experience with setting up the tooling/workspace for a React app before, then hopefully this can help you out.

It is made up of the following:

* [Webpack](https://webpack.js.org/) this bundles your `src` files into a single file.
* [React](https://facebook.github.io/react/) which of course, is what you're writing the application in!
* [Babel](https://babeljs.io/) enables you to write ES6 Javascript and have it transpiled to ES5 Javascript.
* [Sass](http://sass-lang.com/) a CSS pre-processor to make your life easier when writing app styles.

If you're eager to learn about the npm and React environment side of things, I suggest reading the following two blog
posts by [Tamizhvendan S](https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr)
and [Jonathan MH](https://jonathanmh.com/webpack-sass-scss-compiling-separate-file/). They both essentially provide the
groundwork for what this project is and helped me to start out when I was setting up this environment.

If you're here for learning react however, you should just be able to jump right into the [React documentation](https://facebook.github.io/react/docs/hello-world.html).
Eventually you'll want to understand the environment though, but of course that can wait till a rainy day.

## Pre-requisites

* [Node.js](https://nodejs.org) installed.
* A good understanding of Javascript will help.

## Setup

1. Install [Node.js](https://nodejs.org) if you haven't already.
2. Open your command line and navigate to the project. (['Shift + Right Click' in explorer -> 'Open Command Line/Powershell here'](http://i.imgur.com/6FJcydX.png))
3. Do `npm install` to fetch [npm](https://www.npmjs.com/) dependencies.
4. Do `npm run dev` to start a local development server.
5. On your browser, navigate to `localhost:8080`.
6. You should (hopefully) get a page in your browser with some text on it and stuff.
7. Start building your React app! (When you make changes, it will automagically be reflected on your browser.)

### Building for production

1. When you've finished building your React app, do run `npm run build` to create a production-ready build of your React app.
2. Put the generated files (the ones inside the `dist/` folder) on your web server.
3. You're done!

## Commands

* `npm run dev` Builds the `src` directory and then starts a watch. Any changes within the `src` folder will be recompiled and you can just reload your browser window.
* `npm run build` Builds a 'production' version of the bundles that can be deployed to a website.

## After setting up

* Check out the [Official React Tutorial](https://facebook.github.io/react/tutorial/tutorial.html#overview) and [Documentation](https://facebook.github.io/react/docs/hello-world.html). It's really helpful and should keep you on the right track.
* Optionally, install the [React Developer Tools](https://chrome.google.com/webstore/detail/fmkadmapgofadopljbjfkapdkoienihi) for Chrome.
* Give some time to the [Sass guide](http://sass-lang.com/guide) as well for when you need to start adding styles to your app.
* I've also left some comments in the `src` files which hopefully help.
* Most importantly experiment! Try things - it doesn't have to be perfect first time, it just has to work!

## Contributing

If you have an issue with the project, please [create an issue for it](https://github.com/South-Paw/simple-react-starterkit/issues).

If you think I've missed something or something can be done better, by all means [submit a pull request](https://github.com/South-Paw/simple-react-starterkit/pulls) or [raise an issue in the project](https://github.com/South-Paw/simple-react-starterkit/issues).

## License
[MIT](https://github.com/South-Paw/simple-react-starterkit/blob/master/LICENSE)

# TODO

* Add/improve default example tests.
