
import throttle from "lodash.throttle";
import Vimeo from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function() {
    player.getCurrentTime().then(function(seconds) {
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
        // seconds = the current playback position       
    }).catch(function(error) {
        error.message;
        // an error occurred
    }); 
};

const savedSeconds = localStorage.getItem(STORAGE_KEY,);
const parsedSconds = JSON.parse(savedSeconds);

player.setCurrentTime(parsedSconds).then(function() { 
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    // switch (error.name) {
    //     case 'RangeError':
    //         // the time was less than 0 or greater than the video’s duration
    //         break;

    //     default:
    //         // some other error occurred
    //         break;
    // }
});

player.on('timeupdate', throttle(onPlay, 1000));