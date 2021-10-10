const Engineer = require('../lib/Engineer');

test('Can get GitHub username through constructor', () => {
    const github = 'jalenvillena';
    const engineer = new Engineer('Jalen Villena', 2, 'fakeemail@fakeemail.com', github, 'Engineer');
    expect(engineer.github).toBe(github);
});

test("getRole() should return 'Engineer'", () => {
    const role = 'Engineer';
    const engineer = new Engineer('Nico Bueno', 3, 'fakeemail@fakeemail.com', 'GitHubUser', 'Engineer');
    expect(engineer.getRole()).toBe(role);
});

test('Can get GitHub username through getGithub()', () => {
    const github = 'kevinbelisario';
    const engineer = new Engineer('Kevin Belisario', 4, 'fakeemail@fakeemail.com', github, 'Engineer');
    expect(engineer.getGithub()).toBe(github);
});