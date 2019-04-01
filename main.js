window.onload = init;

function init() {
    // Button 1: the Search button. This button will search the array for the object and return. 
    document.querySelector('#search')
        .addEventListener('click', searchList);
    // Button 2: T
    document.querySelector('#display-all')
        .addEventListener('click', displayList);


}

function displayList(event) {
    event.preventDefault()
    let i;
    for (let i in data) {
        console.log("user");
        for (let j in data[i]) {


            function addElement() {
                let divNew = document.createElement("div");
                let divContent = document.createTextNode(data[i][j]);
                divNew.appendChild(divContent);
                let divBase = document.getElementById("wrapper");
                document.body.insertBefore(divNew, divBase);


            }
            addElement()
        }



    }


}

function searchList(event) {
    event.preventDefault()
    let i;
    for (let i in data) {
        console.log("user");
        for (let j in data[i]) {
            console.log(" " + data[i][j]);
        }

    }

}