// DOM-element

//Referens till formulärelementet
const form = document.querySelector("form");

//Referens till textinput-elementet
const textInput = document.querySelector("input#text");

//Referens till listelementet
const list = document.querySelector(".list");

//Referens till listContainer
const listContainer = document.getElementById("listContainer");

//Referens till ul-elementet
const ul = document.querySelector("ul");

//Referens till name-input-elementet
const nameInput = document.querySelector("input#name");

let numberOfElements = 0


// Eventlistener för formuläret när det skickas
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Förhindrar standarformulärbeteende (sidan laddas om)
    console.log("Form submit");

    // Ändrar från display none till display flex så att länksamling syns
    listContainer.style.display = "flex";

    // Hämta värde från namn-input
    const inputValueName = nameInput.value;
    console.log("inputValueName", inputValueName);

    // Hämta värde från text-input
    let inputValue = textInput.value;
    console.log("inputValue", inputValue);

    // Lägg till ul som barn till list om det inte reedan är det
    list.appendChild(ul);

    // Skapa ett nytt li-element

    let li = document.createElement("li");
    // Lägg till li som barn till ul
    ul.appendChild(li);
    numberOfElements += 1;



    // Sätt innehållet i li-elementet med en länk, en hjärt-knapp och en delete-knapp
    li.innerHTML = `<button class="delete">&#10005;</button><button class="save">&hearts;</button><a class="link" href="${inputValue}" target="_blank">${inputValueName}</a></li>`;

    // Återställ värdena i inputfälten
    textInput.value = "";
    nameInput.value = "";

});


// Eventlistener för ul-elementet när det klickas 
ul.addEventListener("click", function (event) {
    console.log("click", event.target);

    // Kontrollera om det klickade elementet är en knapp
    if (event.target.nodeName === "BUTTON") {
        console.log(event.target.className);

        if (event.target.className === "save") {
            event.target.classList.remove(event.target.className);
            event.target.classList.add("heart");
        }

        else if (event.target.className === "heart") {
            event.target.classList.remove(event.target.className);
            event.target.classList.add("save");
        }


        else if (event.target.className === "delete") {
            event.target.parentElement.remove();
            numberOfElements -= 1;
            if (numberOfElements == 0) {
                listContainer.style.display = "none";
            }
        }
    }
});
