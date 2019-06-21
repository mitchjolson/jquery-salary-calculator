$(document).ready(onReady);

let employees = [];

function onReady(){
    $('#submitButton').on('click', submit);
}

function submit(){
    console.log('clicked submit');
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        salary: $('#salaryIn').val(),
    }
    console.log( 'adding: ', newEmployee );
    employees.push( newEmployee );
    showEmployee();
}

function showEmployee(){
    let el = $( '#employeesOut' );
    el.empty();
    for( let i=0; i < employees.length; i++ ){
        el.append( `<li>${employees[i]}</li>` );
    }
}