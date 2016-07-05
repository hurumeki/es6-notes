Number.MAX_SAFE_INTEGER = Math.pow(2, 53)-1;
Number.MIN_SAFE_INTEGER = -Number.MAX_SAFE_INTEGER;
Number.isSafeInteger = function (n) {
    return (typeof n === 'number' &&
        Math.round(n) === n &&
        Number.MIN_SAFE_INTEGER <= n &&
        n <= Number.MAX_SAFE_INTEGER);
}
