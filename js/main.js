// console.log("JS File linked")
// Command + / to toggle the single line comment

const $bodyTag = document.querySelector("body")

// using createElement to create a new HTML element
const $newSection = document.createElement("section")

// setting the value of id attribute by using the id property
$newSection.id = "groceries"

// using appendChild to add HTML to an element on the page
$bodyTag.appendChild($newSection)

// Using insertAdjacentHTML method with afterbegin, more popular
$newSection.insertAdjacentHTML("afterbegin", `<h2>Groceries</h2>`)

// Using insertAdjacentHTML method with beforened, more popular
$newSection.insertAdjacentHTML("beforeend", `<ul id="grocery-list"></ul>`)

let $groceryList = ['apples', 'dog food', 'bread', 'bananas', 'milk', 'eggs']
const $groceryUl = document.getElementById("grocery-list")

// using forEach method

/* $groceryList.forEach(function (item) {
    $groceryUl.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
}) */

// Using forEach with arrow funciton
/* $groceryList.forEach(item => {
    $groceryUl.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
}) */

// highlight multiple lines use Shift + option + A to comment

// create an empty array
let $listItems = []

// using forEach to loop over $groceryList
$groceryList.forEach(item => {
    // pushing html with the item variable to the $listItems array
    $listItems.push(`<li>${item}</li>`)
})

// add list items as a package to the grocerylist using insertAdjacentHTML
// $listItems.join('') joins all the items of the list $listItems into one
$groceryUl.insertAdjacentHTML('afterbegin', $listItems.join(''))

// Create an addItem(item) funciton to add a new item to the array and update the page
