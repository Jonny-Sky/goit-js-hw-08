import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (currentTime) {
  // console.log('played the video!');
  throttle(
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime.seconds)
    ),
    1000
  );
});

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  let parsedTime = JSON.parse(saveTime);
  const currentSecond = parsedTime;
  // console.log(currentSecond);

  if (parsedTime) {
    player
      .setCurrentTime(parsedTime)
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
  }
}
