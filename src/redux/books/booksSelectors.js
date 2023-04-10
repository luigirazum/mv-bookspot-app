/*-------------------------------------------------
 * Selectors DEFINITIONS (for booksSlice)
 *-------------------------------------------------*/
const selectLibrary = (store) => store.books.library;
const selectIsLoading = (store) => store.books.isLoading;
const selectBookById = (store, id) => store.books.library.filter((book) => book.id === id);

export { selectLibrary, selectIsLoading, selectBookById };
