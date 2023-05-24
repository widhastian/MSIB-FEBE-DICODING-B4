const makeCoffe = (ingredient) => {
    return new Promise((resolve, reject) => {
        if(ingredient) {
            resolve("a")
        } else {
            reject("b")
        }
    });
}

makeCoffe()
.then(console.log)
.catch(console.log)