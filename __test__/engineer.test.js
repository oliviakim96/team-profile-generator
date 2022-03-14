
const Engineer = require('../lib/Engineer');
test('Engineer object', () => {
    const engineer = new Engineer('Olivia', 90, 'oliviakim@gmail.com', 'oliviakim96');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('github value', () => {
    const engineer = new Engineer('Olivia', 90, 'oliviakim@gmail.com', 'oliviakim96');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('employee role', () => {
    const engineer = new Engineer('Olivia', 90, 'Olivia', 'oliviakim96');

    expect(engineer.getRole()).toEqual("Engineer");
});