//  1
/*
import {employees } from "./employees.js";;
import {totalSalary} from "./methods.js";
console.log (totalSalary(employees));


//  2
import {departmentQuantity} from "./methods.js";
console.log(departmentQuantity(employees));

*/
//  3

import employees  from "./employees.js";;
import * as employeesMethods from "./methods.js";
console.log(employeesMethods.totalSalary(employees));
console.log(employeesMethods.departmentQuantity(employees));
console.log(employeesMethods.departmentSalary(employees));


