const Story = (title) => {
  let chapters = [];
  let completed = false;

  const addChapters = (...chapterData) => {
    chapterData.forEach((data) => {
      chapters.push(data);
    });
  };

  const findFirstChapter = () => {
    return chapters.find(
      (firstChapter) => firstChapter.getChapterNumber() === 1
    );
  };

  const findNextChapter = (currentChapter) => {
    const chapterNumber = currentChapter.getChapterNumber();

    return chapters.find(
      (nextChapter) => nextChapter.getChapterNumber() === chapterNumber + 1
    );
  };

  const getTitle = () => title;
  const setCompletionStatus = () => (completed = !completed);
  const getCompletionStatus = () => completed;

  return {
    addChapters,
    findFirstChapter,
    findNextChapter,
    getTitle,
    setCompletionStatus,
    getCompletionStatus,
  };
};

export { Story };
