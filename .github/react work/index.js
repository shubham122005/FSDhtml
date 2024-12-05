console.log("hello");
const parent=document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"cyan"}},"ABES Enginerring college");
// const l1=React.createElement("li",{},"Orange");
// const l2=React.createElement("li",{},"Mango");
// const ul=React.createElement("ul",{style:{backgroundColor:'cyan'}},[l1,l2]);
// root.render(ul);
const h2=<h2>Hello World</h2>
const l1=<li>Orange</li>;
const l2=<li>Mango</li>;
const ul=<ul style={{color:'red'}}>{l1}{l2}</ul>
const container=(
    <div style={{backgroundColor:'brown'}}>

    {h2}
    <div>{ul}</div>
    </div>

)
root.render(container);
