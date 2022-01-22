import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(TIME_KEY, data.seconds);
}
player
  .setCurrentTime(localStorage.getItem(TIME_KEY))
  .then(function (seconds) {
    console.log('Valid seconds:', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('The time was less than 0 or greater than the video’s duration');
        break;
      default:
        console.log('No seconds');
        break;
    }
  });
