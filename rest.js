function getData() {
    fetch("rest.json").then(function (response) {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }).then(function (restObj) {
        console.log(restObj);
        generateView(restObj);
    }).catch(function (error) {
        console.error("Something went wrong");
        console.log(error);
    })
}

function getCard(res) {

    const html = createCardHTML(res);
    document.querySelector("#inner").insertAdjacentHTML("afterbegin", html);
}

function createCardHTML(res) {

    return `<div class ="restaurant">
    <p><img src="${res.photo}" alt="${res.name}" width="200" height="80" /></p>
    <p>Name:${res.name}</p>
    <p>Location:${res.location}</p>
    <p>Delivery Time:${res.eta}</p>
    <p>Rating:${res.rating}</p>
    </div>`;
}


function generateView(resObj) {
    const view = resObj.map(res => {
        getCard(res);
    }).join("");

    document.querySelector("#container").insertAdjacentHTML("afterbegin", view);
}

getData();
