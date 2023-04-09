/*-------------------------------------------------
 * Selectors DEFINITIONS (for booksSlice)
 *-------------------------------------------------*/
const selectLibrary = (store) => store.books.library;
const selectIsLoading = (store) => store.books.isLoading;

export { selectLibrary, selectIsLoading };
