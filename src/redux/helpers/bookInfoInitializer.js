const bookInfoGenerator = (chapters) => {
  const random = chapters || 15;

  if (chapters < 5) {
    return {
      error: 'The book needs to be at least 5 chapters.',
    };
  }

  if (chapters > 30) {
    return {
      error: 'Too many chapters for a Book, a range from 5 to 30 is allowed.',
    };
  }

  const chapsGenerator = () => Math.floor(Math.random() * random);
  let genChapters;

  do {
    genChapters = chapsGenerator();
  } while (genChapters < 5 || genChapters > 30);

  const currentChapter = Math.floor(Math.random() * genChapters);

  const percent = currentChapter !== 0 ? Math.floor((currentChapter / genChapters) * 100) : 0;

  const chapterName = currentChapter !== 0 ? `Chapter #${currentChapter}` : 'Introduction';

  const data = new Map([
    ['chapters', genChapters],
    ['currentChapter', currentChapter],
    ['chapterName', chapterName],
    ['percent', percent],
  ]);

  const bookData = Object.fromEntries(data);

  return bookData;
};

export default bookInfoGenerator;
