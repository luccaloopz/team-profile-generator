const Manager = require('../lib/Manager');

describe("Manager class", () => {
    describe("Properties", () => {
        it("should create the Manager object property of officeNumber", () => {
            const officeNumber = 100;

            const testObj = new Manager("Lucca", 1, "luccamartins2012@gmail.com", officeNumber);

            expect(testObj.officeNumber).toEqual(officeNumber);
        });
    });

    describe("Methods", () => {
        it("the getRole() method should return 'Manager'.", () => {
            const testRole = "Manager";

            const testObj = new Manager("Lucca", 1, "luccamartins2012@gmail.com", 100);

            expect(testObj.getRole()).toEqual(testRole);
        });
    });
});