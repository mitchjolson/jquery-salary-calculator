$(document).ready(onReady);

let employees = [];
let totalSalary = 0;

function onReady(){
    $('#submitButton').on('click', submit);
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

function showEmployee(){
    let el = $( '#employeesOut' );
    el.empty();
    for( let i=0; i < employees.length; i++ ){
        el.append( 
            `<li>
                ${employees[i].firstName} ${employees[i].lastName} ${employees[i].idNumber} 
                ${employees[i].jobTitle} $${employees[i].salary} 
            </li>`
        );
    }
}

function showSalaryTotal( salary ){
    salary = Number(salary);
    totalSalary += salary;
    let totalMonthly = Math.round(totalSalary / 12 * 100) / 100;
    console.log('adding ', salary, ', total salary is now: ', totalSalary );
    let el = $('#totalSalaryOut');
    el.empty();
    el.append( `Total Monthly: $${totalMonthly} `);
    checkMonthly(totalMonthly);
}

function checkMonthly(total){
    if( total > 20000 ){
        console.log('We be payin\' too much money.')
    }
}

// Need to do a red background when total monthly is > 12000
// Need to add a remove button for each element I add
// Style better, use a grid with bootstrap?
// Stretch goals?