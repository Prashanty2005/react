import React from "react";
import ReactDOM from "react-dom/client"

// const element1=React.createElement("h1",{id:"first",className:"prashant",style:{backgroundColor:"blue",key:"heading1"}},"hello prashant");
// const element2=React.createElement("h2",{id:"first",className:"prashant",style:{backgroundColor:"blue" , key:"heading2"}},"hello Boss");
//ReactDom.render(element,document.getElementById("root"));

//const div1= React.createElement("div",{},[element1,element2]);


//                    react                       Render
//React.createElement() => react element (JSObject) => HTML element

//   babel                    React                      render
//JXS => React.createElement() => react element (JSObject) => HTML element


const Reactroot=ReactDOM.createRoot(document.getElementById("root"));
const names= "prashant"
const obj={
    name:"nuee",
    age:32
}

const obj2={
    backgroundColor:"black",
    color:"red",
    fontSize:"30px"
}
//react component
const newElement = (
    <>
        <h1 id="first">Hello coder prashant {names}</h1>
        <h2 className="second" money={67} style={obj2}>Maza aa gaya { obj.age}</h2>
    </>

)
Reactroot.render(newElement);
//we can write html and css code in js and jxs will convert it into react code
//jxs is not part of react

//JXS: Javascript XML:HTML code direct js ke andar likh sakte ho


//function based components
function greet(){
    return <h1>teri ma ki  deudeu</h1>
}
const meet= ()=>{
    return <h2>fhurfj8ijf8i4fj</h2>
}

const newElement3=meet();
const newElement2=greet();

const newElement4= <>{newElement2} {newElement3}</>
Reactroot.render(newElement2);
Reactroot.render(newElement4);
