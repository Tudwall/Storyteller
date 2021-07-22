const Chapter = (story, images, question, chapterNumber) => {
  let completed = false;

  const setCompletionStatus = () => (completed = !completed);
  const getCompletionStatus = () => completed;
  const getStory = () => story;
  const getImages = () => images;
  const getQuestion = () => question;
  const getChapterNumber = () => chapterNumber;

  return {
    setCompletionStatus,
    getCompletionStatus,
    getStory,
    getImages,
    getQuestion,
    getChapterNumber,
  };
};

export { Chapter };
