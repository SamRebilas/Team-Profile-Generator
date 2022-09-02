const Manager = require("../lib/Manager");

test("Role will return answer: Manager", () =>{
    const role = "Manager";
    const event = new Manager("Foo", 1, "@email", role)
    expect(event.returnRole()).toBe(role)
});
test("Get office number", () =>{
    const officeNumber = 1
    const event = new Manager("foo", 1, "@email", officeNumber)
    expect(event.returnOfficeNumber).toBe(officeNumber)
});