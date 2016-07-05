const REGEX_SYMBOL_STRING = /^@@(.*)@@$/;
const symbolReviver = function symbolReviver(key, value) {
    if (typeof value === 'string') {
        const match = REGEX_SYMBOL_STRING.exec(value);
        if (match) {
            const symbolKey = match[1];
            return Symbol.for(symbolKey);
        }
    }
    return value;
}

const str = '{"myKey":"@@http://example.com/my_symbol@@"}';
const parsed = JSON.parse(str, symbolReviver);
String(parsed['myKey']); // Symbol(http://example.com/my_symbol)
