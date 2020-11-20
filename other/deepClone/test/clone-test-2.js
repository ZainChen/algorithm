const clone = require('../src/clone-2');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

const result = clone(target);

console.log(JSON.stringify(result, null, 2));
