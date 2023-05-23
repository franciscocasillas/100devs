//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Friends", "Scrubs", "Dr. House"];
tvShows.forEach((item) => console.log(item));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [1, 3, 7, 99, 8, 4, 2];
let even = numbers.filter((item) => item % 2 === 0);
console.log(even);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let nums = [3, 4, 5, 1, 28, 24, 33];
let sorted = nums.sort((a, b) => a - b);
alert(sorted[1] + sorted[sorted.length - 2]);
