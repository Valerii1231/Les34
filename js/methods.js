export  function totalSalary(employees) {
    let sumSalary = 0;
    for (let key of employees) {   
       for (let k in key) {       
          if (k === 'salary') {          
             sumSalary = sumSalary + key[k];
          }
       }
    }
    return sumSalary;
 }
