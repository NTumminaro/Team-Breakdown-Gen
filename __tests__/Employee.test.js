const Employee = require("../lib/Employee");

// whole Employee test
describe("Employee class", () => {
    // test for employee constructor
    describe("New Employee", () => {
        it("creates a new employee object", () => {
            const employee = new Employee("Steve", 3, "yaboi@test.net");
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    // test for getName
    describe("getName Function", () => {
        it("should return employee.name", () => {
            const employee = new Employee("Steve", 3, "yaboi@test.net");

            expect(employee.getName()).toEqual("Steve");
        });
    });

    //test for getId
    describe("getId Function", () => {
        it("should return the employee.id", () => {
            const employee = new Employee("Steve", 3, "yaboi@test.net");

            expect(employee.getId()).toEqual(3);
        });
    });

    // test for getEmail()
    describe("getEmail Function", () => {
        it("should return the employee.email", () => {
            const employee = new Employee("Steve", 3, "yaboi@test.net");

            expect(employee.getEmail()).toEqual("yaboi@test.net");
        });
    });

    // test for getRole
    describe("getRole Function", () => {
        it("should return 'Employee' as a string", () => {
            const employee = new Employee("Steve", 3, "yaboi@test.net");

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
