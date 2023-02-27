// Your users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Receive an error message when the `form` is submitted if:
// - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
// - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`).
//  The message for this error should say *"Looks like this is not an email"*


function isEmpty() {
  const firstNameInput = document.getElementById("FirstName");
  const lastNameInput = document.getElementById("LastName");
  const emailAddressInput = document.getElementById("EmailAddress");
  const passwordInput = document.getElementById("Password");

  if (firstNameInput.value === "" || lastNameInput.value === "" || emailAddressInput.value === "" || passwordInput.value === "") {
    alert("Veuillez remplir tous les champs.");
    return false;
  }
  else {
    console.log('yessir')
    return true;
  }
}

function validateEmail(email) {
  // Expression régulière pour vérifier si l'email est valide
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) //return true/false
}

let freeTrial = document.getElementById('FreeTrial')

freeTrial.addEventListener('click', () => {
  const emailAddress = document.getElementById("EmailAddress").value
  isEmpty()
  validateEmail(emailAddress)
})

//changer remplir tous les champs et detecter quel champs ne sont pas remplit
//check le format de l'email
//faire ajustement css


