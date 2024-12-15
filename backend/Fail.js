let x = [3, 4, 78, 13, 38, 90, 1, 378, 1, -1, 0, 99, 55, 5, 10, 5899, 1938, 36, 27, -29287, 20, 92, 11, 189, 1234, 9039, 83, 93, 2];
let right = []; // smaller than or equal to 10 numbers
let left = []; // greater than 10 numbers
let final = []; // all numbers in line

for (let i = 0; i < x.length; i++) {
  if (x[i] <= 10) {
    right.push(x[i]);
  } else {
    left.push(x[i]);
  }
}

// Adding smaller numbers to final array
for (let i = 0; i < right.length; i++) {
  final.push(right[i]);
}

// Adding greater numbers to final array
for (let i = 0; i < left.length; i++) {
  final.push(left[i]);
}

console.log(final);