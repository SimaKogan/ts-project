import { Company } from "./Company";
import { Employee } from "./Employee"
import { SalesPerson } from "./SalesPerson"
import { WageEmployee } from "./WageEmployee"
const employees: Array<Employee> = [new WageEmployee(123, "Vasya", 1970,
 "Development", 10000, 100, 100), new WageEmployee(124, "Sara", 1975, "Management",
  12000, 100, 100), new SalesPerson(125, "Abraham", 1980, "Sales", 11000, 100,
   100, 10000, 1)];
const company = new Company(employees);
console.log(`salary budget is ${company.computeBudget()}`);
const empl1 = new SalesPerson(127, "Victor",2000, "QA",10000, 100, 100,1000,1);
const salary1 = empl1.computeSalary();
company.addEmployee(empl1);
console.log(`after adding new employee with salary ${salary1} the salary budget is ${company.computeBudget()} `)
const empl2: Employee|null = company.getEmployee(125);
// if (empl2) {
//    const salary2 = empl2.computeSalary();
// }
//const salary2 = empl2!.computeSalary();//programmer knows for sure that null cannot be
const salary2: number = empl2!.computeSalary();
company.removeEmployee(125);
console.log(`after removing  employee with salary ${salary2} the salary budget is ${company.computeBudget()} `)