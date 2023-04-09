/*-------------------------------------------------
* Selectors DEFINITIONS (for categoriesSlice)
*-------------------------------------------------*/
const selectStatus = (store) => store.categories.status;
const selectIsLoading = (store) => store.categories.isLoading;

export { selectStatus, selectIsLoading };
