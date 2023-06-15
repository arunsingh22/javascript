

// Factory func
function createBicyleFactory(name, color, type) {
    let bicyle = {}; // empty obj
    bicyle.name = name;
    bicyle.color = color;
    bicyle.type = type;
    return bicyle;
}


let cycle1 = createBicyleFactory("arun", "red", "normal")
console.log(JSON.stringify(cycle1))
console.log(Object.values(cycle1))


// ---------- Constructor mode --------------
// JS doesn't has constructor.  When a normal function with new keyword is called JS automatically adds 
// the 2 lines and this is the reason that we are able to create new objects.
// if we remove the new keyword then js compiler will throw error , as it doesn't understand and treats it like a normal func
function Bicyle(name, color, type) {
    // let bicycle = {}
    this.name = name;
    this.color = color;
    this.type = type;
    // return bicycle
}

// let cycle2 = new Bicyle("shilpa", "pink", "gearcycle")
// console.log(JSON.stringify(cycle2))

// let cycle2 = Bicyle("arun", "abc", "ad")



// All func in js return undefined by default and when we call a constructor without a new keywor, this refers to global object 
// since js interpreter doesn't add a return stmt , the constructor returns a undefined.