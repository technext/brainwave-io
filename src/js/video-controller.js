/* -------------------------------------------------------------------------- */
/*                    Video Controller                                        */
/* -------------------------------------------------------------------------- */

const videoControllerInit = () => {
  const parent = document.querySelector('[data-video-player-parent]');
  const videoPlayer = document.querySelector('[data-video-player');
  const playButton = document.querySelector('[data-play-button');
  const playIcon = document.querySelector('[data-play-icon');
  const pauseIcon = document.querySelector('[data-pause-icon');
  const overlay = document.querySelector('[data-overlay]');

  pauseIcon.style.display = 'none';

  const buttonVisible = () => {
    playButton.style.display = 'flex';
    overlay.style.opacity = '0.4';
  };

  const buttonHidden = () => {
    overlay.style.opacity = '0';
    if (!videoPlayer.paused) {
      playButton.style.display = 'none';
    }
  };

  playButton.addEventListener('click', () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      videoPlayer.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });

  parent.addEventListener('mouseover', buttonVisible);
  parent.addEventListener('mouseout', buttonHidden);
  videoPlayer.addEventListener('ended', () => {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    playButton.style.display = 'block';
  });
};

export default videoControllerInit;