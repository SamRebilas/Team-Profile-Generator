const Engineer = require("../lib/Engineer");

test("Role will return answer: Engineer", () =>{
    const role = "Engineer";
    const event = new Engineer("Foo", 1, "@email", role)
    expect(event.returnRole()).toBe(role)
});

test("get GitHub username", () =>{
    const gitHub = "GitHubUsername"
    const event = new Engineer("Foo", 1, "@email", gitHub)
    expect(event.returnGitHub()).toBe(gitHub)
})