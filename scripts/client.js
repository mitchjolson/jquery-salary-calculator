$(document).ready(onReady);

let employees = [];
let totalSalary = 0;

function onReady(){
    $('#submitButton').on('click', submit);
    $('#employeesOut').on('click', '.deleteButton', deleteEmployee);
}

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
}

function deleteEmployee(){
  console.log('deleteEmployee button clicked');
// The function needs to target the <td> containing the ID number and assign it to a new variable.
// Then run a loop in the array to find any objects with that ID number, and splice them from the array.
// After that, we run any functions necessary to update the DOM with the new array.
//  $(this).parent().parent().remove();
//  $(this).parent().previousElementSibling().remove();
  console.log( $(this).parent().parent().children('td.tdID') );
  let xID = $(this).parent().parent().children('td.tdID')[0].innerHTML;
  console.log(xID);
}

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
//            `<li>
//                ${employees[i].firstName} ${employees[i].lastName} ${employees[i].idNumber}
//                ${employees[i].jobTitle} $${employees[i].salary}
//            </li>`
        );
    }
}

function showSalaryTotal( salary ){
    salary = Number(salary);
    totalSalary += salary;
    let totalMonthly = Math.round(totalSalary / 12 * 100) / 100;
    console.log('adding ', salary, ', total salary is now: ', totalSalary );
    let el = $('#totalSalaryOut');
    if( totalMonthly > 20000 ){
      el.empty();
      el.append( `<h3 id="redTotal">Total Monthly Salary: $${totalMonthly}</h3> `);
    }
    else{
      el.empty();
      el.append( `<h3>Total Monthly Salary: $${totalMonthly}</h3`);
    }
}


// Add comments to code
// Stretch goals?
