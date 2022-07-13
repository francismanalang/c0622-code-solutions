var contactForm = document.forms[0];

function handleForm(event) {
  event.preventDefault();
  var valueObject = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };
  console.log(valueObject);
  contactForm.reset();
}

contactForm.addEventListener('submit', handleForm);
