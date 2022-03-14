
const Manager = require('../lib/Manager');
test(' Manager object', () => {
    const manager = new Manager('Nikki', 90, 'nikki@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Nikki', 90, 'nikki@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 