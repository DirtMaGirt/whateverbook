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

    for (let i in data) {
        for (let obj in data[i]) {

            function addElement() {
                let divNew = document.createElement("div");
                let divContent = document.createTextNode(data[i][obj]);
                divNew.appendChild(divContent);
                divNew.className = "userContent";

                let divBase = document.getElementById("wrapper");
                divBase.appendChild(divNew)

            }
            addElement()
        }








    }


}

function searchList(event) {
    event.preventDefault()
    const searchTerm = document.querySelector('#search-input').value;


    console.log(searchTerm)
}

document.getElementById("demo").innerHTML = ages.find(checkAdult);
}







// for (let i in data) {
//     for (let obj in data[i]) {
//         if (data[i][obj] === listItem) {
//             let divNew = document.createElement("div");
//             let divContent = document.createTextNode(data[i][obj]);
//             divNew.appendChild(divContent);
//             divNew.className = "userContent";
//             let divBase = document.getElementById("wrapper");
//             divBase.appendChild(divNew)
//             console.log(data[i])
}

}

}
}