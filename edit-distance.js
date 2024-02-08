'use strict';

// Given two strings, return true if edit distance between them is 1
// Otherwise return false
// Input: two strings
// Output: boolean

// Assuming moving a char to a new location is > 1 edit distance

// cat cat = false  
// cat car = true   
// cat tat = true   
// cat cats = true
// cats cat = true
// cat cxat = true
// cat cxats = false
// cat rcat = true
// cat catta = false  
// cat bar = false   
// cat cxts = false

function isEditDistanceOne(strA, strB) {
  let lenDiff = Math.abs(strA.length - strB.length);
  // 0 edits needed
  if (strA === strB || lenDiff > 1) return false;
  
  let strikeCount = 0;
  if (lenDiff === 0) {
    for (let i = 0; i < strA.length; i++) {
      if (strA[i] !== strB[i]) strikeCount++;
      if (strikeCount > 1) return false;
    }
  } else {  // should be lenDiff === 1
    let lesserLenStr = (strA.length < strB.length) ? strA : strB;
    let longerLenStr = (strA.length > strB.length) ? strA : strB;
    for (let i = 0, j = 0; i < lesserLenStr.length; i++, j++) {
      if (lesserLenStr[i] !== longerLenStr[j]) {
        i--;
        strikeCount++;
      }
      if (strikeCount > 1) return false;
    }
  }
  return true;
}

console.log("Test isEditDistanceOne");
console.log("cat", "car", isEditDistanceOne('cat', 'car')); // true
console.log("cat", "rat", isEditDistanceOne('cat', 'rat')); // true
console.log("cat", "cbt", isEditDistanceOne('cat', 'cbt')); // true
console.log("cat", "cat", isEditDistanceOne('cat', 'cat')); // false
console.log("cat", "cta", isEditDistanceOne('cat', 'cta')); // false
console.log("cat", "cattr", isEditDistanceOne('cat', 'cattr')); // false
console.log("cattr", "cat", isEditDistanceOne('cattr', 'cat')); // false
console.log("book", "books", isEditDistanceOne('book', 'books')); // true
console.log("book", "biook", isEditDistanceOne('book', 'biook')); // true
console.log("book", "books", isEditDistanceOne('book', 'books')); // true
console.log("books", "book", isEditDistanceOne('books', 'book')); // true
console.log("book", "book", isEditDistanceOne('book', 'book')); // false
console.log("book", "bioks", isEditDistanceOne('book', 'bioks')); // false


function editDistance(str1, str2) {
  // Edit distance of 0
  if (str1 === str2) return false;

  let editCount = 0;

  // Depending on length diff b/w strings, take one of these paths
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        editCount++;
      }
      if (editCount > 1) return false;
    }
  } else if (Math.abs(str1.length - str2.length) == 1) {
    if (str1.length < str2.length) {
      for (let i = 0, j = 0; i < str1.length; i++, j++) {
        if (str1[i] !== str2[j]) {
          editCount++;
          j++;
        } 
        if (editCount > 1) return false;
      }
    } else {
      for (let i = 0, j = 0; i < str2.length; i++, j++) {
        if (str2[i] !== str1[j]) {
          editCount++;
          j++;
        } 
        if (editCount > 1) return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

console.log();
console.log("Test editDistance");
console.log("cat", "car", editDistance('cat', 'car')); // true
console.log("cat", "rat", editDistance('cat', 'rat')); // true
console.log("cat", "cbt", editDistance('cat', 'cbt')); // true
console.log("cat", "cat", editDistance('cat', 'cat')); // false
console.log("cat", "cta", editDistance('cat', 'cta')); // false
console.log("cat", "catter", editDistance('cat', 'catter')); // false
console.log("catter", "cat", editDistance('catter', 'cat')); // false
console.log("book", "books", editDistance('book', 'books')); // true
console.log("book", "biook", editDistance('book', 'biook')); // true
console.log("book", "books", editDistance('book', 'books')); // true
console.log("books", "book", editDistance('books', 'book')); // true
console.log("book", "book", editDistance('book', 'book')); // false
console.log("book", "bioks", editDistance('book', 'bioks')); // false

