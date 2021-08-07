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

  const getFinalQuizzes = (index) => {
    if (quizzes[index]) {
      return quizzes[index];
    }
    return null;
  };

  const allPassed = () => {
    for (let i = 0; i < quizzes.length; i++) {
      const quizzPassed = quizzes[i].getPassed();

      if (quizzPassed == false) {
        return false;
      }
    }
    return true;
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
    allPassed,
    getChapter,
  };
};

export { Story };
