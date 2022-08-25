

const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

test('check if object exists', () =>{
    const e = new Employee
    expect(typeof(e)).toBe("here")
});

test("check if user can enter name", () =>{
    const name = "Sam"
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test("Check user id", () =>{
    const id = "1"
    const e = new Employee(id)
    expect(e.id).toBe(id)
});

test("check user email", () =>{
    const email = "@email"
   
})