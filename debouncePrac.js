const doSomething = (counter) => {
    alert("Hi!" + counter);
}

const debounce = (doSomething, delay) => {
    let counter = 0;
    let timer;
    return function () {
        clearInterval(timer);
        if (!counter) {
            doSomething(counter);
            counter++;
        } else {
            timer = setTimeout(() => {
                doSomething(counter);
                counter++;
            }, delay);
        }
    }
}

const execute = debounce(doSomething, 2000);



