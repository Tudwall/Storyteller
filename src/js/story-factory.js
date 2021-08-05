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

  const getChapter = (number) => {
    const foundChapter = chapters.find((chapter) => {
      return chapter.getChapterNumber() == number;
    })
    return foundChapter;
  }

  const findNextChapter = (number) => {
    const nextChapter = getChapter(number+1);

    if (nextChapter) {
      return nextChapter;
    }
    return null;
  };

  const getFinalQuizzes = () => {
    return quizzes.find((quiz) => {
      return quiz.getPassed() === false;
    });
  };

  const getTitle = () => title;
  const getChapters = () => chapters;
  const setCompletionStatus = () => (completed = !completed);
  const getCompletionStatus = () => completed;

  return {
    addChapters,
    getChapters,
    findNextChapter,
    getTitle,
    setCompletionStatus,
    getCompletionStatus,
    getFinalQuizzes,
    getChapter,
  };
};

export { Story };
