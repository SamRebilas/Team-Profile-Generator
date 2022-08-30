const Intern = require("../lib/Intern");

test("Role will return answer: Intern", () =>{
    const role = "Intern";
    const event = new Intern("Foo", 1, "@email", role)
    expect(event.returnRole()).toBe(role)
});

test("get school name", () =>{
    const school = "schoolName"
    const event = new Intern("Foo", 1, "@email", school)
    expect(event.returnschoolName()).toBe(school)
})