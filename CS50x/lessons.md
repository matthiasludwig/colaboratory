# Week 1

#### Command Line

* ls - list contents of the current directory
* cd - change directory
* mkdir - create new folder
* cp -r - copy file from <source> <destination> | -r copies directories recursively

#### Conditional Statements

* if
* if-else
* Switch (with break; and default:)
* ternary operator: int x = (expr) ? 5 : 6;

# Week 2

**RAM** - Contigious Memory -\> Array

## Sorting Algorithms

O(n) - linear

O(n^2) - for example: Bubble Sort or Selection Sort

O(log n) - dividing over and over again

O (n log n) - for example: Merge Sort

### Selection Sort

Find the smallest unsorted element in an array. Swap with the first unsorted element of that array.

O(n) = n^2

Omega = n^2

### Bubble Sort

Swap adjacent pairs of elements if they are ouf of order. That bubbles larger elements to the right. Smaller elements to the left.

O(n) = n^2

Omega = n

### Insertion Sort

Proceed ones through the array from left-to-right shifting elements and inserting each element in its correct place.

O(n) = n^2

Omega: n

### Merge Sort

Split and merge. Split in subarrays and then merge together back into the correct order.

O(n) = n log n

Omega = n log n

---

## Searching Algorithms

### Linear Search

O(n) = n

Omega = 1

### Binary Search

Array must be sorted! Divide and conquer.

O(n) = log n

Omega = 1