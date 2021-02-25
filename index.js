const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats;
}

function removeLastCat() {
    return cats.slice(0, 2);
}

function removeFirstCat() {
    return cats.slice(1,3);
}
