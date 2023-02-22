"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalSalary = totalSalary;
exports.departmentQuantity = departmentQuantity;
exports.departmentSalary = departmentSalary;

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
  var sumSalary = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      for (var k in key) {
        if (k === 'salary') {
          sumSalary += key[k];
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sumSalary;
}

function departmentQuantity(employees) {
  var dep = [];
  var i = 0;
  var counts = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = employees[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var obj = _step2.value;

      for (var key in obj) {
        if (key === 'department') {
          counts[i] = obj[key];
          i += 1;
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  for (var _i = 0; _i < counts.length; _i++) {
    if (dep[counts[_i]]) {
      dep[counts[_i]]++;
    } else {
      dep[counts[_i]] = 1;
    }
  }

  var countDep = Object.keys(dep).length;
  return countDep;
}

function departmentSalary(employees) {
  var depSalary = {
    frontend: 0,
    backend: 0,
    design: 0,
    sales: 0
  };
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = employees[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var obj = _step3.value;

      for (var key in obj) {
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
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return depSalary;
}