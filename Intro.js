

// Promise maker 🍕
let promise = new Promise(function (resolve, reject) {
    // simulates asyncrounous ops
    setTimeout(() => {
        reject("Done")
    }, 1000)
})

// Promise recevier 
promise.then(
    function (data) {
        console.log("🍟")
    },
    function (data) {
        console.log("🤢")
    }
)
// .then(func1,func2) => func1 gets executed when state is accomplised
// it's a success , func2 when the state is rejected

// Better way to write .then 
// promise.then(() => { console.log("success") }, () => console.log("failure"))
