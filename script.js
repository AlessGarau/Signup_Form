// Your users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Receive an error message when the `form` is submitted if:
// - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
// - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`).
//  The message for this error should say *"Looks like this is not an email"*

function getValue(input){
    value = document.getElementById(input).value
}

// let FirstName = getValue("First Name")
// let LastName = getValue("Last Name")
// let EmailAddress = getValue("Email Address")
// let Password = getValue("Password")

function verifyEmpty(variable){
    if(!variable){
        console.log(variable)
    } else{
        alert(variable.name, "Champ vide")
    }
}
let FirstName = document.getElementById("FirstName")
let LastName = document.getElementById("LastName")
let EmailAddress = document.getElementById("EmailAddress")
let Password = document.getElementById("Password")

let inputArray = [FirstName, LastName, EmailAddress, Password]

let allInputs = document.querySelectorAll("input")

let freeTrial = document.getElementById("FreeTrial")

freeTrial.addEventListener('click', () => {

    inputArray.forEach(input => 
        verifyEmpty(input.value)
        )
})
