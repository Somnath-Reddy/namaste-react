const heading = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"parent-child1"},[React.createElement("h1", {id:"heading1"},"im parentChild1" ),React.createElement("h1", {id:"heading1"}, "im parentChild2")]  ),React.createElement("div", {id:"parend-child2"},[React.createElement("h1", {id:"child1"},"im parentChild1" ),React.createElement("h1", {id:"child2"}, "im parentChild2")] )] );



const root = ReactDOM.createRoot(document.getElementById("root"));


const result = root.render(heading);