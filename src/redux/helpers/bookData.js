const getFullData = (bookData) => {
  const {
    id, title, author, category,
  } = bookData;
  const [bookCategory, randomInfo] = category.split(']-[');
  const randomBookData = JSON.parse(randomInfo);

  return ({
    id,
    title,
    author,
    category: bookCategory,
    ...randomBookData,
  });
};

export default getFullData;
