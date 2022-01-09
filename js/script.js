let elForm = document.querySelector(".form");
let elInputName = document.querySelector(".input-name");
let elInputRelation = document.querySelector(".input-relation");
let elInputPhone = document.querySelector(".input-phone");
let elContactAlert = document.querySelector(".contact__alert");

let contacts = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let InputNameValue = elInputName.value;
  let InputRelationValue = elInputRelation.value;
  let InputPhoneValue = elInputPhone.value;

  const contact = {
    name: InputNameValue,
    relations: InputRelationValue,
    phone: InputPhoneValue,
  };

  contacts.push(contact);
  elInputName.value = null;
  elInputRelation.value = null;
  elInputPhone.value = null;
  elContactAlert.innerHTML = null;

  for (let item of contacts) {

    // CREATE
    let newAlert = document.createElement("div");
    let newAlertHeading = document.createElement("h3");
    let newAlertDesc = document.createElement("p");
    let newAlertNumber = document.createElement("p");

    // SET ATRIBUTTE
    newAlert.setAttribute("class", "alert alert-dark");
    newAlert.setAttribute("role", "alert");
    newAlertHeading.setAttribute("class", "alert-name");
    newAlertDesc.setAttribute("class", "alert-relationship");
    newAlertNumber.setAttribute("class", "alert-tel text-danger");


    // TEXT CONTENT
    newAlertHeading.textContent = item.name;
    newAlertDesc.textContent = item.relations;
    newAlertNumber.textContent = item.phone;


    // ADD ELEMENT
    elContactAlert.appendChild(newAlert);
    newAlert.appendChild(newAlertHeading);
    newAlert.appendChild(newAlertDesc);
    newAlert.appendChild(newAlertNumber);
  }
});
