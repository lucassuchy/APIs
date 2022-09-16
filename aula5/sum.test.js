const soma = require('./sum')

test('soma(5,5) = 10', function() {
   expect(soma(5,5)).toBe(10); 
});

test('soma(-5,-5) = -10', function() {
    expect(soma(-5,-5)).toBe(-10); 
 });
 