$(document).ready(onReady);

let employees = [];
let totalSalary = 0;

// Function to dictate what button clicks will handle
function onReady(){
    $('#submitButton').on('click', submit);
    $('#employeesOut').on('click', '.deleteButton', deleteEmployee);
}

// When "submit" button is pressed, enter a new employee object to the employees array
// then run showEmployee function to append employees array to the DOM
// then run showSalaryTotal to calculate total monthly salary and append it to DOM
function submit(){
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        salary: $('#salaryIn').val(),
    }
    employees.push( newEmployee );
    showEmployee();
    showSalaryTotal(newEmployee.salary);
    $(`#firstNameIn`).val('');
    $(`#lastNameIn`).val('');
    $(`#idNumberIn`).val('');
    $(`#jobTitleIn`).val('');
    $(`#salaryIn`).val('');
}

// function uses jQuery to grab the text of the employee ID in the selected ROW when delete button is clicked
// it then loops through the employees array and removes any objects with the matching ID
// it grabs the employee's salary and converts it to a negative number to run the showSalaryTotal function
// it also runs the showEmployee function again with the modified array
function deleteEmployee(){
    console.log( 'deleting employee with ID#',$(this).parent().parent().children('td.tdID')[0].innerHTML );
    let xID = $(this).parent().parent().children('td.tdID')[0].innerHTML; // There's probably an easier way to do this?
    for(let i=0; i < employees.length; i++){
      if( xID === employees[i].idNumber ){
        let xSalary = 0 - employees[i].salary;
        employees.splice( i, 1 );
        showEmployee();
        showSalaryTotal(xSalary);
        i -= 1; // this allows the function to delete any duplicates of the selected employee being deleted
      }
    }
}

// function loops through employees array and appends each object to the DOM in a table
function showEmployee(){
    let el = $( '#employeesOut' );
    el.empty();
    for( let i=0; i < employees.length; i++ ){
        el.append(`
            <tr><td>${employees[i].firstName}</td>
            <td>${employees[i].lastName}</td>
            <td class="tdID">${employees[i].idNumber}</td>
            <td>${employees[i].jobTitle}</td>
            <td>$${employees[i].salary}</td>
            <td><button class="deleteButton">Delete</button></td></tr>
            `
        );
    }
}

// function calculates the total monthly salary when an employee is added or removed
// in the event of an employee removal, a negative number is provided by the deleteEmployee function
function showSalaryTotal( salary ){
    salary = Number(salary);
    totalSalary += salary;
    let totalMonthly = Math.round(totalSalary / 12 * 100) / 100; //rounds the number to 2 decimal places
    let el = $('#totalSalaryOut');
    // if the total monthly salary exceeds 20k, background of the #redTotal element will be red.
    if( totalMonthly > 20000 ){
      el.empty();
      el.append( `<h3 id="redTotal">Total Monthly Salary: $${totalMonthly}</h3> `);
    }
    else{
      el.empty();
      el.append( `<h3>Total Monthly Salary: $${totalMonthly}</h3`);
    }
}
