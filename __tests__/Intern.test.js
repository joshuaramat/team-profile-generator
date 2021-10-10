const Intern = require('../lib/Intern');

test('Can set school through constructor', () => {
    const school = 'SJSU';
    const intern = new Intern('Joshua', 1, 'fakeemail@fakeemail.com', school, 'Intern');
    expect(intern.school).toBe(school);
});

test("getRole() should return 'Intern'", () => {
    const role = 'Intern';
    const intern = new Intern('Joshua', 1, 'fakeemail@fakeemail.com', 'SJSU', role);
    expect(intern.getRole()).toBe(role);
});

test('Can get school through getSchool()', () => {
    const school = 'SJSU';
    const intern = new Intern('Joshua', 1, 'fakeemail@fakeemail.com', school, 'Intern');
    expect(intern.getSchool()).toBe(school);
});