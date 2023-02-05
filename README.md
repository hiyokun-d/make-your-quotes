# Text Aesthetic - HIYO

This is a react component that allows you to write and display text in markdown syntax.

## Features

- Supports markdown syntax
- Textarea can be resized
- Real-time rendering of text in markdown format

## Libraries Used

- [Next.js](https://nextjs.org/) for server-side rendering
- [React](https://reactjs.org/) for building user interfaces
- [Showdown](https://github.com/showdownjs/showdown) for converting markdown to HTML
- [CSS Modules](https://github.com/css-modules/css-modules) for styling the component

## Code Overview

The code uses `useRef` and `useState` hooks from React to manage the state of the component. It also uses the `Showdown` library to convert markdown to HTML.

The `handleChange` function is triggered on every change in the textarea and updates the state with the HTML representation of the markdown text. The HTML is then rendered to the screen using the `div` ref.

## Conclusion

This is a simple and fun way to write and display text in markdown format. Try it out for yourself and see how easy it is to use.
