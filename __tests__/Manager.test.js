const Manager = require("../lib/Manager");

// whole Manager test
describe("Manager class", () => {
    // test for manager constructor
    describe("New Manager", () => {
        it("creates a new manager object", () => {
            const manager = new Manager( 1,"Steve", 3, "yaboi@test.net");
            expect(manager.name).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    // test for getName
    describe("getName Function", () => {
        it("should return manager.name", () => {
            const manager = new Manager( 1,"Steve", 3, "yaboi@test.net");

            expect(manager.getName()).toEqual("Steve");
        });
    });

    //test for getId
    describe("getId Function", () => {
        it("should return the manager.id", () => {
            const manager = new Manager( 1,"Steve", 3, "yaboi@test.net");

            expect(manager.getId()).toEqual(3);
        });
    });

    // test for getEmail()
    describe("getEmail Function", () => {
        it("should return the manager.email", () => {
            const manager = new Manager( 1,"Steve", 3, "yaboi@test.net");

            expect(manager.getEmail()).toEqual("yaboi@test.net");
        });
    });

    // test for getRole
    describe("getRole Function", () => {
        it("should return 'Manager' as a string", () => {
            const manager = new Manager( 1,"Steve", 3, "yaboi@test.net");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});
