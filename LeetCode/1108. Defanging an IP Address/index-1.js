/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let s = '';
    for (let i = 0; i < address.length; i++) {
        s += address[i] === '.' ? '[.]' : address[i];
    }
    return s;
};

let sample1 = "1.1.1.1";
let sample2 = "255.100.50.0";

console.log('zain1>>>>>', defangIPaddr(sample1));
console.log('zain2>>>>>', defangIPaddr(sample2));
