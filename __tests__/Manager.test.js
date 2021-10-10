const Manager = require('../lib/Manager');

test('Can set office number through constructor', () => {
    const office = 1;
    const manager = new Manager('Michael Scott', 1, 'bestboss@dundermifflin.com', office, 'Manager');
    expect(manager.officeNumber).toBe(office);
});

test("getRole() should return 'Manager'", () => {
    const role = 'Manager';
    const manager = new Manager('Dwight Schrute', 2, 'assistanttotheregionalmanager@dundermifflin.com', 2, role);
    expect(manager.getRole()).toBe(role);
});

test('Can get office number through getOfficeNumber()', () => {
    const office = 2
    const manager = new Manager('Jim Halpert', 3, 'aarom@dundermifflin.com', office, 'Manager');
    expect(manager.getOfficeNumber()).toBe(office);
});