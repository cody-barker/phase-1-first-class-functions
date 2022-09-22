const receivesAFunction = callback => callback();

function returnsANamedFunction() {
    const pigglyWiggly = () => console.log("I am Piggly Wiggly!");
    return pigglyWiggly;
}

function returnsAnAnonymousFunction() {
    //return () => "Returning an anonymous function.";
    return function() {
        return "Test";
    }
}