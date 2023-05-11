//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Thor", "Grease", "Run, Lola, Run"];
movies.forEach((x) => (document.querySelector("h2").innerText += " " + x));

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [3, 9, 16, 21];
for (let i = 0; i < numbers.length; i++) {
	numbers[i] += 3;
}
console.log(numbers);

//Find the average of all the numbers from question three
let average = 0;
numbers.forEach((x) => (average += x));
average = average / numbers.length;
console.log(average);
