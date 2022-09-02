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

const getStorageItem = localStorage.getItem(LOCALSTORAGE_KEY);

if (getStorageItem) {
    player.setCurrentTime(getStorageItem).then(function(seconds) {    
}).catch(function (error) {
    console.log(error.name);
});
};