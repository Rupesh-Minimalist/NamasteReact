//JS Way

// let el=document.createElement("h1");
// el.classList.add("hello");
// el.innerText="Hello World from Javascript !";
// document.body.appendChild(el);


let el=React.createElement("h1",{id:"hello"},"Hello World From React !"); 
let root=ReactDOM.createRoot(document.querySelector(".inject"));
root.render(el);

let parent=React.createElement("div",{id:"outest"},

           [React.createElement("div",{id:"outer1"},
           [React.createElement("h1",{id:"inner1"},"Jio RAJA1!"),
           React.createElement("h2",{id:"innerin1"},"Jio RAJA1!")]),
           
           React.createElement("div",{id:"outer2"},
           [React.createElement("h1",{id:"inner2"},"Jio RAJA2!"),
           React.createElement("h2",{id:"innerin2"},"Jio RAJA2!")])]);


let root2= ReactDOM.createRoot(document.querySelector(".inject2"));
root2.render(parent);