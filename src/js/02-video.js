import Player from '@vimeo/player';
// import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var currentTime = localStorage.getItem("video-player-CurrentTime");

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
  });

player.on('play', function() {
    console.log('playing the video!');
});

player.on('timeupdate', _.throttle(
  function (data) {
    currentTime = data.seconds;
    console.log(currentTime);  
    localStorage.setItem("video-player-CurrentTime", JSON.stringify(currentTime));
}, 1250));

player.setCurrentTime(currentTime);


