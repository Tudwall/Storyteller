/* Removed findFirstChapter. Added chapters sorting in addChapters method. I added getCurrentChapter which is more felxible because find method
always returns first element that meets given requirements so in every new story this element is first chapter (thanks to sort method) and it 
also finds first chapter which completion status is false.

I added quiz parameter since i realized how and when quizes should be displayed, then it makes sense to pass all story quizzes when we initialize
new story object. Also, like i wrote in game logic - getFinalQuizzes probably shold be changed to method similar to getCurrentChapter.
 */
const Story = (title, ...quiz) => {
  let chapters = [];
  let completed = false;

  const addChapters = (...chapterData) => {
    chapterData.forEach((data) => {
      chapters.push(data);
    });

    /* For new method getCurrentChapter to work chapters array need to be sorted by chapters numbers */
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
    return quiz.reduce((acc, cur, i) => {
      if (i % 2 === 0) {
        acc.push(cur);
      }
      return acc;
    }, []);
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
