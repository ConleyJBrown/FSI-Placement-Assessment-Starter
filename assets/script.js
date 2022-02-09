// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Conley Brown" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 //total cookies
// selecting the element with an id of credit
console.log("test1")
const credit = document.querySelector('#credit')
console.log("Test2")
// selecting the elements for the plus buttons
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
//selecting the elements for the minus buttons
const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')
//selecting the elements for the quantity dsiplayed of each cookie
let qtyGB = document.querySelector('#qty-gb')
let qtyCC = document.querySelector('#qty-cc')
let qtySugar = document.querySelector('#qty-sugar')
//selecting the element with id qty-total
let qtyTotal = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gb = gb+1
total = total +1
qtyGB.textContent = gb
qtyTotal.textContent = total
})
ccPlusBtn.addEventListener('click', function() {

    // TODO: Write the code to be run when the "+" button for "Chocolate Chip" is clicked
    cc = cc+1
    total = total +1
    qtyCC.textContent = cc
    qtyTotal.textContent = total
    })
sugarPlusBtn.addEventListener('click', function() {

    // TODO: Write the code to be run when the "+" button for "SUGAR" is clicked
        sugar = sugar+1
        total = total +1
        qtySugar.textContent = sugar
        qtyTotal.textContent = total

})

sugarMinusBtn.addEventListener('click', function() {

    // TODO: Write the code to be run when the "-" button for "SUGAR" is clicked
        if (sugar > 0)
        {
        sugar = sugar-1
        total = total -1
        }
        qtySugar.textContent = sugar
        qtyTotal.textContent = total

})

gbMinusBtn.addEventListener('click', function() {

    // TODO: Write the code to be run when the "-" button for "Gingerbread" is clicked
        if (gb > 0)
        {
        gb = gb-1
        total = total -1
        }
        qtyGB.textContent = gb
        qtyTotal.textContent = total

})

ccMinusBtn.addEventListener('click', function() {

    // TODO: Write the code to be run when the "-" button for "Gingerbread" is clicked
        if (cc > 0)
        {
        cc = cc-1
        total = total -1
        }
        qtyCC.textContent = cc
        qtyTotal.textContent = total

})

