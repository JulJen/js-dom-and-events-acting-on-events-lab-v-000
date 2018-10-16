function preventRefreshOnSubmit() {
// Get the first element in the documen
// addEventListener() method attaches an event handler to the specified element
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()


// retrieveEmployeeInformation(): This retrieves the employee information from the input. It returns a string equal to the value in the input.



const result = document.querySelector('input');

function retrieveEmployeeInformation() {
  return result.value;
}


// addNewElementAsLi(): This function takes the value retrieved from the previous retrieveEmployeeInformation function and adds that string to a new list element which is appended to the ul with class "employee-list".
// https://www.w3schools.com/jsref/met_node_appendchild.asp

function addNewElementAsLi() {
  const employeeList = document.querySelector('.employee-list');
  let employee = retrieveEmployeeInformation();

  let node = document.createElement("li");
  let textnode = document.createTextNode(employee);

  employee = node.appendChild(textnode);

  return employeeList.appendChild(employee);

  // solution #2
  // return employeeList.insertAdjacentHTML('beforeend', `<li>${employee}</li>`);
}

// addNewElementAsLi(): This function takes the value retrieved from the previous retrieveEmployeeInformation function
// adds that string to a new list element which is appended to the ul with class "employee-list".

function addNewElementAsLi() {
  let employeeList = retrieveEmployeeInformation()
  return document.querySelector('employee-list')
}

//
// addNewLiOnClick(): This retrieves the employee information from the input.

function addNewLiOnClick() {

  const submitButton = document.querySelector('input[type="submit"]');

  return submitButton.addEventListener('click', function(event) {
    addNewElementAsLi(),
    resetInput()
  });
}


function clearEmployeeListOnLinkClick() {

  const employeeList = document.querySelector('a');
  const ul = document.querySelector('ul');

  employeeList.addEventListener('click', function(event){
    ul.innerHTML = ""
  })
}

function resetInput() {
  return result.value = ""
}
