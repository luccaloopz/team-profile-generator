const Intern = require('../lib/Intern');

describe("Intern class", () => {
    describe("Properties", () => {
        it("should create the Intern object property of school", () => {
            const school = "UCSB";

            const testObj = new Intern("Lucca", 1, "luccamartins2012@gmail.com", school);

            expect(testObj.school).toEqual(school);
        });
    });

    describe("Methods", () => {
        it("the getSchool() method should return the value associated with the school property", () => {
            const testSchool = "UCSB";

            const testObj = new Intern("Lucca", 1, "luccamartins2012@gmail.com", testSchool);

            expect(testObj.getSchool()).toEqual(testSchool);
        });

        it("the getRole() method should return 'Intern'.", () => {
            const testRole = "Intern";

            const testObj = new Intern("Lucca", 1, "luccamartins2012@gmail.com", "UCSB");

            expect(testObj.getRole()).toEqual(testRole);
        });
    });
});