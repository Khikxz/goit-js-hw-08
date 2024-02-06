import Player from '@vimeo/player';
const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('play the video!');
});

player.on('timeupdate', function(data) {
    console.log(data);
});
