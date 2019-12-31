// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Set a for loop with i as counter and 1000 as upper limit
// If a number (i) is a multiple of 3 or 5, it will have no remainder when using modulo arithmetic
// If we find a number that is a multiple (of one or both concurrently) we must add it to the sum variable

let sum = 0;

const sumMultiple = () => {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0 || (i % 3 === 0 && i % 5 === 0)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumMultiple());
