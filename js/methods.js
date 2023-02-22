//  1
/*
export  function totalSalary(employees) {
    let sumSalary = 0;
    for (let key of employees) {   
       for (let k in key) {       
          if (k === 'salary') {          
             sumSalary += key[k];
          }
       }
    }
    return sumSalary;
 }



//  2
export function departmentQuantity(employees) {
   let dep = [];
   let i = 0;
   const counts = [];
   for (let obj of employees) {
      for (let key in obj) {
         if (key === 'department') {
            counts[i] = obj[key];
            i += 1;
         }
      }
   }
   for (let i = 0; i < counts.length; i++) {
      if (dep[counts[i]]) {
         dep[counts[i]]++;
      } else {
         dep[counts[i]] = 1;
      }
   }
   const countDep = Object.keys(dep).length;
   return countDep;
}

*/

//  3
function totalSalary(employees) {
   let sumSalary = 0;
   for (let key of employees) {   
      for (let k in key) {       
         if (k === 'salary') {          
            sumSalary += key[k];
         }
      }
   }
   return sumSalary;
}

function departmentQuantity(employees) {
   let dep = [];
   let i = 0;
   const counts = [];
   for (let obj of employees) {
      for (let key in obj) {
         if (key === 'department') {
            counts[i] = obj[key];
            i += 1;
         }
      }
   }
   for (let i = 0; i < counts.length; i++) {
      if (dep[counts[i]]) {
         dep[counts[i]]++;
      } else {
         dep[counts[i]] = 1;
      }
   }
   const countDep = Object.keys(dep).length;
   return countDep;
}

 function departmentSalary(employees) {
   const depSalary = {
      frontend: 0,
      backend: 0,
      design: 0,
      sales: 0,
   }
   for (let obj of employees) {
      for (let key in obj) {
         if (obj[key] === 'frontend') {
            depSalary.frontend += obj.salary;
         }
         if (obj[key] === 'backend') {
            depSalary.backend += obj.salary;
         }
         if (obj[key] === 'design') {
            depSalary.design += obj.salary;
         }
         if (obj[key] === 'sales') {
            depSalary.sales += obj.salary;
         }
      }
   }
   return depSalary;
}

export {totalSalary, departmentQuantity, departmentSalary }