const categoriesList = 'Unknown,Fiction,Non-fiction,Mystery,Romance,Science fiction,Fantasy,Horror,Thriller,Biography,Autobiography,History,Travel,Science,Self-help,Health,Business,Philosophy,Religion,Art,Music,Cooking,Children&apos;s books,Young adult,Poetry,Drama';

// a call with no value will return a random category
const getRandomCategory = (randomizer = -1) => {
  // create an array to select a category
  const bookCategories = categoriesList.split(',');
  const totalCategories = bookCategories.length;

  const random = randomizer === -1
    ? totalCategories
    : randomizer;

  const randomSelection = random === randomizer
    ? randomizer
    : Math.floor(Math.random() * random);

  const randomCategory = randomSelection > totalCategories
    ? totalCategories - 1
    : randomSelection;

  return bookCategories[randomCategory];
};

export { categoriesList };

export default getRandomCategory;
