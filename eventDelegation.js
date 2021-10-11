document.querySelector("#form").addEventListener("keyup", (e) => {
    //console.log("Category Parent clicked");
    //console.log(e.target.id);
    // if (e.target.tagName == 'LI') {
    //     window.location.href = "/" + e.target.id;
    // }
    //window.location.href = "/"+ e.target.id;
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }

});
