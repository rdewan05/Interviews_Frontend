//Debounce in Javascript
let counter = 0;
const getData = () => {
    //calls an api and get data
    console.log("fetching data..", counter++);
}


const doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, delay);
    }
}

const betterFunction = doSomeMagic(getData, 300);
