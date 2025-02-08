/*
NOW IF I WANT TO MAKE A NESTED STRUCTURE USING REACT..
<div id=parent>
    <div id="child">
        <h1>hello here</h1>
        <h2>kem choo??</h2>
    </div>
</div>

*/


const heading = React.createElement("h1",
    { id: "Heading" },
    "Hello world React!!"); //it will use 1st link... , 2nd & 3rd parameters passes onto the DOM applyingh1 tag..
//  "createElement" make a react element which is nothing bt the JS object which is pass

//for putting all this stuff we have to create root using react Dom..
// const root = ReactDOM.createRoot(document.getElementById("root")); //all stuff will passses into the div..
// root.render(heading);


const parent = React.createElement("div",
    { id: "parent" },
    [React.createElement("div", { id: "child" },    //3rd Arg of 1st react element
        [React.createElement("h1", {}, "hello jhere.."),
        React.createElement("h2", {}, "kem chooo???")] //in that i have sibling h1 & h2 so make Array
    ),
    React.createElement("div", { id: "child2" }, "child")]
);  
// Another way ..
// ReactDOM.render(heading, document.getElementById("root"));
ReactDOM.render(parent, document.getElementById("root"));
