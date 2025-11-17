type Book = {
  title: string;
  rating: number;
};

const filterByRating = (books: Book[]) : Book[] => {
  const ratedBooks = books.filter((book) => book.rating >= 4);
  return ratedBooks;
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));