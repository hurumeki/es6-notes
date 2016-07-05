const iterableObject = {
    [Symbol.iterator]() {
        const data = ['hello', 'world'];
        let index = 0;
        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++] };
                } else {
                    return { done: true };
                }
            }
        };
    }
}
for (const x of iterableObject) {
    console.log(x);
}
// hello
// world
