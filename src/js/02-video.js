const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', _.throttle(getTimeInSeconds, 1000));

function getTimeInSeconds() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(LOCALSTORAGE_KEY, Math.floor(seconds));  
}).catch(function(error) {
    console.log(error.message);
});
};

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function(seconds) {
    
}).catch(function (error) {
    console.log(error.name);
});