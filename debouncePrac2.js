let counter = 0;
const doSomething = () => {
    console.log("make api call..", counter++);
}

const debounce = (doSomething, delay) => {
    let timer;
    return function () {
        clearInterval(timer);
        timer = setTimeout(() => {
            doSomething();
        }, delay);
    }
}

const execute = debounce(doSomething, 300);



