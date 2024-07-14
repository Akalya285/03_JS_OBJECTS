// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */

// 1) Declare variables for a second book and assign them values
var secondBookTitle;
var secondBookAuthor;

secondBookTitle = "1984";
secondBookAuthor = "George Orwell";

// 2) Add code to log its details to the console
console.log(secondBookTitle + " by " + secondBookAuthor);

// 3) Repeat steps 1 and 2 for a third book
var thirdBookTitle;
var thirdBookAuthor;

thirdBookTitle = "Pride and Prejudice";
thirdBookAuthor = "Jane Austen";

console.log(thirdBookTitle + " by " + thirdBookAuthor);

// 4) Consider the code needed for 10 books. For 100 books.
// Using separate variables for each book becomes cumbersome for many books.
// Using arrays or objects would be more efficient.

var books = [
  { title: "The Hobbit", author: "J. R. R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  // Additional books can be added here
];

// Log details for each book using a loop
for (var i = 0; i < books.length; i++) {
  console.log(books[i].title + " by " + books[i].author);
}
