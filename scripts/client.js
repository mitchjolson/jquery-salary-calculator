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
  console.log( 'deleting employee with ID#',$(this).parent().parent().children('td.tdID')[0].innerHTML );
  let xID = $(this).parent().parent().children('td.tdID')[0].innerHTML;
  for(let i=0; i < employees.length; i++){
    if( xID === employees[i].idNumber ){
      let xSalary = 0 - employees[i].salary;
      console.log(xSalary);
      employees.splice( i, 1 );
      showEmployee();
      showSalaryTotal(xSalary);
      i -= 1;
    }
  }
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
