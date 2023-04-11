const Intern = require("../lib/Intern");

// whole Intern test
describe("Intern class", () => {
    // test for Intern constructor
    describe("New Intern", () => {
        it("creates a new intern object", () => {
            const intern = new Intern(
                "Baylor",
                "Steve",
                3,
                "yaboi@test.net"
            );
            expect(intern.name).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
        });
    });

    // test for getName
    describe("getName Function", () => {
        it("should return intern.name", () => {
            const intern = new Intern(
                "Baylor",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(intern.getName()).toEqual("Steve");
        });
    });

    //test for getId
    describe("getId Function", () => {
        it("should return the intern.id", () => {
            const intern = new Intern(
                "Baylor",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(intern.getId()).toEqual(3);
        });
    });

    // test for getEmail()
    describe("getEmail Function", () => {
        it("should return the intern.email", () => {
            const intern = new Intern(
                "Baylor",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(intern.getEmail()).toEqual("yaboi@test.net");
        });
    });

    // test for getRole
    describe("getRole Function", () => {
        it("should return 'Intern' as a string", () => {
            const intern = new Intern(
                "Baylor",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(intern.getRole()).toEqual("Intern");
        });
    });

    // test for getRole
    describe("getSchool Function", () => {
        it("should return the intern.school", () => {
            const intern = new Intern(
                "Baylor",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(intern.getSchool()).toEqual("Baylor");
        });
    });
});
