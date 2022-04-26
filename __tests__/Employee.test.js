const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("Properties", () => {
        it("should create the Employee object property of name", () => {
            const name = "Lucca";

            const testobj1 = new Employee(name);

            expect(testobj1.name).toEqual(name);
        });

        it("should create the Employee object property of id", () => {
            const id = 1;

            const testobj2 = new Employee("Lucca", id);

            expect(testobj2.id).toEqual(id);
        });

        it("should create the Employee object property of email", () => {
            const email = "luccamartins2012@gmail.com";

            const testobj3 = new Employee("Lucca", 1, email);

            expect(testobj3.email).toEqual(email);
        });
    });

    describe("Methods", () => {
        it("the getName() method should return the value associated with the name property", () => {
            const testName = "Lucca";

            const testobj4 = new Employee(testName);

            expect(testobj4.getName()).toEqual(testName);
        });

        it("the getId() method should return the value associated with the id property", () => {
            const testId = 1;

            const testobj5 = new Employee("Lucca", testId);

            expect(testobj5.getId()).toEqual(testId);
        });

        it("the getEmail() method should return the value associated with the email property", () => {
            const testEmail = "luccamartins2012@gmail.com";

            const testobj6 = new Employee("Lucca", 2, testEmail);

            expect(testobj6.getEmail()).toEqual(testEmail);
        });

        it("the getRole() method should return 'Employee'.", () => {
            const testRole = "Employee";

            const testobj7 = new Employee("Lucca", 2, "luccamartins2012@gmail.com");

            expect(testobj7.getRole()).toEqual(testRole);
        });
    });
});