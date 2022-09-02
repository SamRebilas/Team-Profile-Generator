const Employee = require("../lib/Employee");

test("check if user can enter name", () =>{
    const name = "Sam"
    const event = new Employee(name)
    expect(event.name).toBe(name)
});
test("Check user id", () =>{
    const test = "1"
    const event = new Employee(test)
    expect(event.id).toBe(test)
});
test("check user email", () =>{
    const test = "@email"
    const event = new Employee("Foo", 1, test);
    expect(event.email).toBe(test)
});
test("get role", () =>{
    const test = "Employee"
    const event = new Employee("Sam", 1, "@email")
    expect(event.returnRole()).toBe(test)
});
test("get name", () => {
    const test = "Sam"
    const event = new Employee(test)
    expect(event.returnName()).toBe(test)
  });
test("get id", () =>{
    const test = "1"
    const event = new Employee("Foo", test)
    expect(event.returnId()).toBe(test)
});
test("get email", () =>{
    const test = "@email"
    const event = new Employee("Foo", 1, test)
    expect(event.returnEmail()).toBe(test)
});