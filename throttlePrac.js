const doSomething = (counter) => {
    alert("Hi!" + counter);
}

const throttle = (doSomething, delay) => {
    let counter = 0;
    let flag = true;
    return function () {
        if (flag) {
            doSomething(counter);
            flag = false;
            counter++;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }

}

const execute = throttle(doSomething, 2000);



