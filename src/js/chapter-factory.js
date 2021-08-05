const Chapter = (story, chapterNumber, images=null, question=null) => {
  let completed = false;

  const setCompletionStatus = () => (completed = true);
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
}


export { Chapter };
