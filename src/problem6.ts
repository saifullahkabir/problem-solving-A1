//* Problem 6:
// Define an interface Book with the following properties:

// title (string)
// author (string)
// publishedYear (number)
// isAvailable (boolean)
// Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

//* Requirements:
// You must define the Book interface correctly.
// The printBookDetails function must accept an object that follows to the Book interface.

//* Sample Input:
// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

//* Sample Output:
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) : void => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
