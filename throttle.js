const expensive = () => {
    console.log("expensive fun making api calls");
}

window.addEventListener("resize", betterExpensiveFunction);

const throttle = (fn, limit) => {
    let flag = true;
    return function () {
        let context = this, args = arguments;

        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }

}

const betterExpensiveFunction = throttle(expensive, 100);
