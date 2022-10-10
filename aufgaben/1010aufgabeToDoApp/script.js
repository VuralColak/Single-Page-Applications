const body = document.querySelector("body");
const title = document.querySelector("h1");
const input = document.querySelector("#input");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const list = document.querySelector("ul");

localStorage.getItem('Aufgabe');
let textInhalt= [];

document.addEventListener("DOMContentLoaded", () => {
        
    
    button1.addEventListener("click", () => {
        const listElement = document.createElement("li");
        const listContainer = document.createElement("div");
        listContainer.classList.add("listContainer");
        const text = document.createElement("p")
        const check = document.createElement("input");
        check.classList.add("check");
        const remove = document.createElement("button");
        remove.classList.add("buttonRemove");
        remove.innerText = "X";
        listContainer.style.display = "flex";
        check.type = "checkbox";
        list.append(listElement);
        listElement.append(listContainer);
        listContainer.append(check);
        listContainer.append(text);
        listContainer.append(remove);
        text.innerText = input.value;
        remove.addEventListener("click", () => {
            listElement.remove();
        });
        
        
        textInhalt.push(input.value);
        localStorage.setItem('Aufgabe', JSON.stringify(textInhalt));
        input.value = "";

        // let items;

        // // get items from Local Storage
        // function getItemsFromLS() {
        //     if (localStorage.getItem('items') === null) {
        //     items = [];
        // } else {
        //     items = JSON.parse(localStorage.getItem('items'));
        // }
        // return items;
        // }

        // // set item to Local Storage
        
        // items = getItemsFromLS();
        // items.push(text);
        // localStorage.setItem('items',JSON.stringify(items));

    
    });

});




button2.addEventListener("click", () => {
    // const listElement = document.querySelector("p");
    // const check = document.querySelector("input");
    // listElement.remove();
    list.remove();
});








