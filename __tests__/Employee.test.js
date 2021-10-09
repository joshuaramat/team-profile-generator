const Employee = require('../lib/Employee');

test('Can instantiate employee instance', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});

test('Can set set id through constructor argument', () => {
    const name = 'Joshua'
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can set id through constructor', () => {
    const id = '1';
    const employee = new Employee('Joshua', id);
    expect(employee.id).toBe(id);
});

test('Can set email via constructor', () => {
    const email = 'fakeemail@fakeemail.com';
    const employee = new Employee("Joshua", 1, email);
    expect(employee.email).toBe(email);
});

test('Can get name via getName()', () => {
    const name = 'Joshua';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('Can get id via getId()', () => {
    const id = '1';
    const employee = new Employee('Joshua', id);
    expect(employee.getId()).toBe(id);
});

test('Can get email via getEmail()', () => {
    const email = 'fakeemail@fakeemail.com';
    const employee = new Employee('Joshua', 1, email);
    expect(employee.getEmail()).toBe(email);
});

test('getRole() should return role as employee', () => {
    const role = 'Employee';
    const employee = new Employee('Joshua', 1, 'fakeemail@fakeemail.com', 'Employee');
    expect(employee.getRole()).toBe(role);
});