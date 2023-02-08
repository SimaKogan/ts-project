"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("./Company");
const SalesPerson_1 = require("./SalesPerson");
const WageEmployee_1 = require("./WageEmployee");
const employees = [new WageEmployee_1.WageEmployee(123, "Vasya", 1970, "Development", 10000, 100, 100), new WageEmployee_1.WageEmployee(124, "Sara", 1975, "Management", 12000, 100, 100), new SalesPerson_1.SalesPerson(125, "Abraham", 1980, "Sales", 11000, 100, 100, 10000, 1)];
const company = new Company_1.Company(employees);
console.log(`salary budget is ${company.computeBudget()}`);
const empl1 = new SalesPerson_1.SalesPerson(127, "Victor", 2000, "QA", 10000, 100, 100, 1000, 1);
const salary1 = empl1.computeSalary();
company.addEmployee(empl1);
console.log(`after adding new employee with salary ${salary1} the salary budget is ${company.computeBudget()} `);
const empl2 = company.getEmployee(125);
// if (empl2) {
//    const salary2 = empl2.computeSalary();
// }
//const salary2 = empl2!.computeSalary();//programmer knows for sure that null cannot be
const salary2 = empl2.computeSalary();
company.removeEmployee(125);
console.log(`after removing  employee with salary ${salary2} the salary budget is ${company.computeBudget()} `);
//# sourceMappingURL=app.js.map