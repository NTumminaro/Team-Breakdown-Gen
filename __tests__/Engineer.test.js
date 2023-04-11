const Engineer = require("../lib/Engineer");

// whole Engineer test
describe("Engineer class", () => {
    // test for engineer constructor
    describe("New Engineer", () => {
        it("creates a new engineer object", () => {
            const engineer = new Engineer(
                "SteveGit",
                "Steve",
                3,
                "yaboi@test.net"
            );
            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toEqual(expect.any(String));
            expect(engineer.github).toEqual(expect.any(String));
        });
    });

    // test for getName
    describe("getName Function", () => {
        it("should return engineer.name", () => {
            const engineer = new Engineer(
                "SteveGit",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(engineer.getName()).toEqual("Steve");
        });
    });

    //test for getId
    describe("getId Function", () => {
        it("should return the engineer.id", () => {
            const engineer = new Engineer(
                "SteveGit",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(engineer.getId()).toEqual(3);
        });
    });

    // test for getEmail()
    describe("getEmail Function", () => {
        it("should return the engineer.email", () => {
            const engineer = new Engineer(
                "SteveGit",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(engineer.getEmail()).toEqual("yaboi@test.net");
        });
    });

    // test for getRole
    describe("getRole Function", () => {
        it("should return 'Engineer' as a string", () => {
            const engineer = new Engineer(
                "SteveGit",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

    // test for getRole
    describe("getGithub Function", () => {
        it("should return the engineer.github", () => {
            const engineer = new Engineer(
                "SteveGit",
                "Steve",
                3,
                "yaboi@test.net"
            );

            expect(engineer.getGithub()).toEqual("SteveGit");
        });
    });
});
