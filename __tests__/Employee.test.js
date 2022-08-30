

const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

test('check if object exists', () =>{
    const event = new Employee
    expect(typeof(event)).toBe("here")
});

test("check if user can enter name", () =>{
    const name = "Sam"
    const event = new Employee(name)
    expect(event.returnName).toBe(name)
});

test("Check user id", () =>{
    const id = "1"
    const event = new Employee(id)
    expect(event.returnId).toBe(id)
});

test("check user email", () =>{
    const email = "@email"
    const event = new Employee("Foo", 1, email);
    expect(event.returnEmail).toBe(email)
   
});