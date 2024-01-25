<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.freecodecamp.org/">
    <img src="./public/fcc.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App</h3>

  <p align="center">
    A Step-By-Step Tutorial for Beginners
    <br />
    <a href="https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers"><strong>Read on FreeCodeCamp »</strong></a>
    <br />
    <br />
    <a href="https://react-ts-fcc-tutorial.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Yazdun/react-ts-fcc-tutorial/issues">Request Feature</a>
    ·
    <a href="https://github.com/Yazdun/react-ts-fcc-tutorial/issues">Report Bug</a>
  </p>

[![freeCodeCamp](https://img.shields.io/badge/-freeCodeCamp-brightgreen?logo=freeCodeCamp)](https://www.freecodecamp.org/)
[![React](https://img.shields.io/badge/-React-blue?logo=React)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-6E36F6?logo=TypeScript&logoColor=white&color=black)](#)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=Tailwind%20CSS&logoColor=black&color=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-blue?logo=Framer)](https://www.framer.com/api/motion/)

</div>

<div align="center">

![Thumbnail](./public/thumbnail.jpg)

</div>

## Introduction

Welcome to the GitHub repository for the
[TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers)
tutorial!

In today's JavaScript landscape, TypeScript is gaining more and more popularity,
and React developers are increasingly embracing it. If you're a React developer
looking to explore TypeScript or enhance your skills with it, this tutorial is
just for you. I'll guide you through using TypeScript in a React application by
building a classic todo app.

## Getting Started

To get started with the project in your local development environment, follow
these steps:

1. Clone the repository to your local machine.

```bash
git@github.com:Yazdun/react-ts-fcc-tutorial.git
```

2. Open the cloned folder in your preferred code editor, install the required
   dependencies by running the following command in the terminal:

```bash
npm install
```

3. To access the starter files for the tutorial, use the following command:

```bash
git checkout starter
```

4. Start the development server by running the following command:

```bash
npm run dev
```

You are now ready to go!

## Contribute to this project

Thank you for browsing this repo. Any contributions you make are **greatly
appreciated**.

If you have a suggestion that would make this better, please fork the repo and
create a pull request. You can also simply open an issue with the tag
"enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Use the concept of this project:

### What is useRef and how to to use it with TypeScript

useRef is a special hook in React that creates a reference to an element or
value in your component. This reference can be used to access and manipulate the
referenced element directly, without causing re-renders.

You'll commonly use it to access DOM elements, manage focus, or store mutable
values across component renders.

### What is forwardRef in React?

In React, the forwardRef function is a feature that allows you to pass a ref
from a parent component to a child component. Refs are used to access and
manipulate the underlying DOM elements directly.

By using forwardRef, you can create a custom component that can receive a ref
and pass it down to a specific element within the component.

### What is React Context?

React Context API is a feature in React that allows data to be shared and
accessed by components without passing it explicitly through props. It provides
a way to create a global state that can be accessed by any component in the
application.

React Context API simplifies the process of sharing data across components,
eliminating the need for manual prop drilling.

### What are Interfaces in TypeScript?

In TypeScript, interfaces are a way to define the structure and shape of an
object. They allow you to specify the properties and their types that an object
should have. Think of an interface as a blueprint or a contract that describes
what an object should look like.

Imagine you are building a house. Before starting the construction, you would
have a blueprint that outlines the design and layout of the house. Similarly, an
interface in TypeScript is like a blueprint for an object.

Let's look at a simple example of an interface:

````ts
interface Person {
  name: string;
  age: number;
}```
````

#### Resource Link

[https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers/]
