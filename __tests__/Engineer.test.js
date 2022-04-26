const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    describe("Properties", () => {
        it("should create the Engineer object property of gitUser", () => {
            const gitUser = "luccaloopz";

            const testObj = new Engineer("Lucca", 1, "luccamartins2012@gmail.com", gitUser);

            expect(testObj.gitUser).toEqual(gitUser);
        });
    });

    describe("Methods", () => {
        it("the getGithub() method should return the value associated with the gitUser property", () => {
            const testGitUser = "luccaloopz";

            const testObj = new Engineer("Lucca", 1, "luccamartins2012@gmail.com", testGitUser);

            expect(testObj.getGithub()).toEqual(testGitUser);
        });

        it("the getRole() method should return 'Engineer'.", () => {
            const testRole = "Engineer";

            const testObj = new Engineer("Lucca", 1, "luccamartins2012@gmail.com", "luccaloopz");

            expect(testObj.getRole()).toEqual(testRole);
        });
    });
});