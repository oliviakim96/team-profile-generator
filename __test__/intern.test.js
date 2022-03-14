
const Intern = require('../lib/Intern');
 
test('Intern object', () => {
    const intern = new Intern('Nicole', 90, 'Duka@gmail.com', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('employee school', () => {
    const intern = new Intern('Nicole', 90, 'Duka@gmail.com', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'Duka@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 