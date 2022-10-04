const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Prince",
            animal: "Dog",
            breed: "Demon"
        }),
        React.createElement(Pet, {
            name: "Malcolm",
            animal: "Dog",
            breed: "Lab"
        }),
        React.createElement(Pet, {
            name: "Frankie",
            animal: "Cat",
            breed: "Siamese"
        }), 
    ]);
};

//# sourceMappingURL=index.9e7b1db9.js.map
