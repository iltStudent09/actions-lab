const assert = require('assert');

//Test 1: addition
assert.strictEqual(2 + 3, 5, 'Addition test failed');
console.log('Addition test passed');

//Test 2: string
assert.strictEqual('Hello' + ' ' + 'World', 'Hello World', 'String concatenation test failed');
console.log('String concatenation test passed');

//Test 3: multiplications
assert.strictEqual(2 * 3, 6, 'Multiplication test failed');
console.log('Multiplication test passed');
console.log('All tests passed successfully');
