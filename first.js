const { createElement } = require("react");

const react={

    createElement:function(tag,styles,children){
        const element=document.createElement(tag);
        if(children==="object"){
            
        }
        element.innerText=children;
        for(let key in styles){
            element.style[key]=styles[key];

        }

        return element;
    }
}

const reactDOM={
    render:function(element,root){
        root.append(element);
    }
}


const header1=react.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"red"},"hello");
const Li1=react.createElement("li",{},"html");
const Li2=react.createElement("li",{},"css");
const Li3=react.createElement("li",{},"js");

const Ul=react.createElement('ul',{},[Li1,Li2,Li3]);

// const header1=document.createElement('h1');
// header1.style.backgroundColor="red";
// header1.innerText="prashant is a good boy";
// header1.style.fontSize="34px";
// header1.style.color="green";


// const header2=document.createElement('h1');
// header2.style.backgroundColor="red";
// header2.innerText="prashant is a good boy";
// header2.style.fontSize="34px";
// header2.style.color="green";


const root=document.getElementById("root");
// root.append(header1);
// root.append(header2);

reactDOM.render(header1,document.getElementById('root'));