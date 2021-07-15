const Chapter = (story, images, question, chapterNumber) => {
  let completed = false;

  const setCompletitionStatus = () => (completed = !completed);
  const getCompletitionStatus = () => completed;
  const getStory = () => story;
  const getImages = () => images;
  const getQuestion = () => question;
  const getChapterNumber = () => chapterNumber;

  return {
    setCompletitionStatus,
    getCompletitionStatus,
    getStory,
    getImages,
    getQuestion,
    getChapterNumber,
  };
};

export default Chapter;
