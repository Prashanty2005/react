const element1=React.createElement("h1",{id:"first",className:"prashant",style:{backgroundColor:"blue"}},"hello prashant");
const element2=React.createElement("h2",{id:"first",className:"prashant",style:{backgroundColor:"blue"}},"hello Boss");
//ReactDom.render(element,document.getElementById("root"));


const Reactroot=ReactDOM.createRoot(document.getElementById("root"));
const div1= React.createElement("div",{},[element1,element2]);

Reactroot.render(div1);

//JXS
//we can write html and css code in js and jxs will convert it into react code
//jxs is not part of react

