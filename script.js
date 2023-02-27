// Your users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Receive an error message when the `form` is submitted if:
// - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
// - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`).
//  The message for this error should say *"Looks like this is not an email"*

function isEmpty(array) {
  array.forEach(input => {
    if (input.value === "") {
      input.classList.add("wrongInput")
      input.placeholder = `${input.name} cannot be empty`
    } else {
      input.classList.remove("wrongInput")
      return true;
    }
  })

}

function validateEmail(email) {
  // Expression régulière pour vérifier si l'email est valide
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) //return true
}

const firstNameInput = document.getElementById("FirstName");
const lastNameInput = document.getElementById("LastName");
const emailAddressInput = document.getElementById("EmailAddress");
const passwordInput = document.getElementById("Password");

let inputArray = [firstNameInput, lastNameInput, lastNameInput, emailAddressInput, passwordInput]

let freeTrial = document.getElementById('FreeTrial')

freeTrial.addEventListener('click', () => {
  const emailAddress = document.getElementById("EmailAddress").value
  isEmpty(inputArray)
  validateEmail(emailAddress)
})

//faire ajustement css


