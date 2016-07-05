function symbolReplacer(key, value) {
    if (typeof value === 'symbol') {
        return '@@' + Symbol.keyFor(value) + '@@';
    }
    return value;
}
const MY_SYMBOL = Symbol.for('http://example.com/my_symbol');
const obj = { myKey: MY_SYMBOL };

const str = JSON.stringify(obj, symbolReplacer);
str; // {"myKey":"@@http://example.com/my_symbol@@"}
