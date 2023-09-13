// 1. Select the section with an id of container without using querySelector.

const secID = document.getElementById("container");
console.log(secID);

// 2. Select the section with an id of container using querySelector.

const secID2 = document.querySelector("#container");
console.log(secID2);

// 3. Select all of the list items with a class of “second”.

const allListItems = document.querySelectorAll(".second");
console.log(allListItems);

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

const ol = document.querySelector("ol");
const listItem = ol.querySelector(".third");
console.log(listItem);

// 5. Give the section with an id of container the text “Hello!”.

const newText = document.createElement('p');
newText.textContent= "Hello!";

const addText = document.querySelector("#container");
addText.append(newText);

// 6. Add the class main to the div with a class of footer.

const footer = document.querySelector(".footer");
footer.classList.add("main");

// 7. Remove the class main on the div with a class of footer.

footer.classList.remove("main");

// 8. Create a new li element.

const newli = document.createElement('li');

// 9. Give the li the text “four”.

newli.textContent= "four";

// 10. Append the li to the ul element.

const ul = document.querySelector("ul");
ul.append(newli);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.

const olElem = document.querySelector("ol");

const lis = olElem.querySelectorAll("li");

for(i=0; i<lis.length; i++){
    lis[i].style.color = "green";
}

// 12. Remove the div with a class of footer

const removeFooter = document.querySelector(".footer");
const parent2 = document.querySelector("body");

parent2.removeChild(removeFooter);