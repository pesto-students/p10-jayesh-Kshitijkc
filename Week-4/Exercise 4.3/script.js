function FibonacciIterator() {
    let current = 0;
    let next = 1;

    return {
        next: function() {
            const value = current;
            temp_next = next + current;
            current = next;
            next = temp_next

            return {
                value: value,
                done: false
            };
        }
    };
}
  
const iterator = FibonacciIterator();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);