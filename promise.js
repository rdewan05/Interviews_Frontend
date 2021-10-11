let promiseToCleanRoom = new Promise(function (resolve, reject) {
    //Do Cleaning
    let isClean = false;
    if (isClean) {
        resolve("Clean");
    } else {
        reject("Not clean");
    }
});

promiseToCleanRoom.then(function (fromResolve) {
    console.log(" room is " + fromResolve);
}).catch(function (fromReject) {
    console.log(" room is " + fromReject);
});

