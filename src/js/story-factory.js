const Story = (title, quizzes) => {
  let chapters = [];
  let completed = false;

  const addChapters = (...chapterData) => {
    chapterData.forEach((data) => {
      chapters.push(data);
    });

    chapters.sort((a, b) => {
      return a.getChapterNumber() - b.getChapterNumber();
    });
  };

  const getCurrentChapter = () => {
    const currentChapter = chapters.find((currentChapter) => {
      return currentChapter.getCompletionStatus() === false;
    });

    return currentChapter;
  };

  const findNextChapter = () => {
    const nextChapter = getCurrentChapter();

    if (nextChapter) {
      const nextChapterNumber = nextChapter.getChapterNumber();
      return chapters.find(
        (chapter) => chapter.getChapterNumber() === nextChapterNumber
      );
    }
  };

  const getFinalQuizzes = () => {
    return quizzes.find((quiz) => {
      return quiz.getPassed() === false;
    });
  };

  const getTitle = () => title;
  const setCompletionStatus = () => (completed = !completed);
  const getCompletionStatus = () => completed;

  return {
    addChapters,
    findNextChapter,
    getTitle,
    setCompletionStatus,
    getCompletionStatus,
    getFinalQuizzes,
    getCurrentChapter,
  };
};

export { Story };
