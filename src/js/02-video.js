import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (currentTime) {
  console.log('played the video!');
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
});
// =========================================================
// ===========================================================

const saveTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(saveTime);

const currentSecond = parsedTime.seconds;
console.log(parsedTime.seconds);

player
  .setCurrentTime(currentSecond)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
