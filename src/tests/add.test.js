const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7); 
});

test('should return a greeting', () => {
    const greetResult = generateGreeting('Chris');
    expect(greetResult).toBe('Hello Chris!');
});

test('should return a greeting', () => {
    const greetResult2 = generateGreeting();
    expect(greetResult2).toBe('Hello Anonymous!');
});