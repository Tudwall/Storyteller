import videoSrc from "../help-video.mp4";

const videoContainer = document.createElement("div");
const helpVideo = document.createElement("video");
const videoSource = document.createElement("source");

const removeHelp = () => {
  helpVideo.remove()
  videoContainer.remove();
}

const displayHelp = () => {
  videoSource.src = videoSrc;
  videoSource.type = "video/mp4";

  helpVideo.id = "help-video";
  helpVideo.controls = true;
  helpVideo.addEventListener("click", e => e.stopPropagation())
  helpVideo.addEventListener("ended", removeHelp)
  helpVideo.append(videoSource);

  videoContainer.id = "video-container";
  videoContainer.append(helpVideo);
  videoContainer.addEventListener("click",removeHelp)

  const bodyTag = document.querySelector("body");
  bodyTag.append(videoContainer);
}

export {displayHelp}