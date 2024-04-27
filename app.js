import React, { Component } from "react";
import ReactDOM from "react-dom/client";
//JS Way

// let el=document.createElement("h1");
// el.classList.add("hello");
// el.innerText="Hello World from Javascript !";
// document.body.appendChild(el);

//Traditional React way but not readable
let el = React.createElement("h1", { id: "hello" }, "Hello World From React !");
let root = ReactDOM.createRoot(document.querySelector(".inject"));
root.render(el);

let parent = React.createElement(
  "div",
  { id: "outest" },

  [
    React.createElement("div", { id: "outer1" }, [
      React.createElement("h1", { id: "inner1" }, "Jio RAJA1!"),
      React.createElement("h2", { id: "innerin1" }, "Jio RAJA1!"),
    ]),

    React.createElement("div", { id: "outer2" }, [
      React.createElement("h1", { id: "inner2" }, "Jio RAJA2!"),
      React.createElement("h2", { id: "innerin2" }, "Jio RAJA2!"),
    ]),
  ]
);

let root2 = ReactDOM.createRoot(document.querySelector(".inject2"));
root2.render(parent);

//JSX- Javascript XML

let el3 = <h1 id="jsxx">Hello from JSX</h1>; // use () for multiline

let root3 = ReactDOM.createRoot(document.querySelector(".inject3"));

root3.render(el3);

//Components in React

// 1) Functional components: A js function which returns JSX/React element

let ext=1000;

const ELcomponent = () => {
  return <h2 id="FuncComp"> Hello from Functional Component</h2>;
};

const ELcomponent2 = () => (
<h2 id="FuncComp2">
    <ELcomponent/> 
    <p>rendering comp1 from comp2</p> 
    {ext};
</h2>);

//  or shorthand:
// const ELcomponent=()=><h1 id='FuncComp'> Hello from Functional Component</h1>

let rootComp = ReactDOM.createRoot(document.querySelector(".inject4"));

rootComp.render(<ELcomponent2/>);
