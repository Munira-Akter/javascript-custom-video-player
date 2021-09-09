let input = document.querySelector("input#video_up");
let video = document.querySelector("video");
let play = document.querySelector("#play");
let stop = document.querySelector("#stop");
let progress = document.querySelector("#progress");
let time = document.querySelector("#timestamp");
let volume = document.querySelector("#volume");
let mute = document.querySelector("#mute");

let playpause = (e) => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

let playpauseIcon = (e) => {
    if (video.paused) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
};

let videostop = (e) => {
    video.currentTime = 0;
    video.pause();
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
};

let timeShow = (e) => {
    progress.value = `${(video.currentTime * 100) / video.duration}`;

    let min = Math.floor(video.currentTime / 60);
    let sec = Math.floor(video.currentTime % 60);

    if (min < 10) {
        min = "0" + String(min);
    }

    if (sec < 10) {
        sec = "0" + String(sec);
    }

    time.innerHTML = `${min}:${sec}`;
};

let progrssUpdate = (e) => {
    video.currentTime = (+progress.value * video.duration) / 100;
};

let upvol = (e) => {
    console.log((video.volume = volume.value / 100));
};

// Stop video
function updatemute() {
    if (video.muted) {
        video.muted = false;
        mute.innerHTML = `<i class="fa fa-volume-up"></i>`;
    } else {
        video.muted = true;
        mute.innerHTML = `<i class="fa fa-volume-off"></i>`;
    }
}

video.onclick = playpauseIcon;
play.onclick = playpauseIcon;
stop.onclick = videostop;
video.ontimeupdate = timeShow;
progress.onchange = progrssUpdate;
volume.onchange = upvol;
mute.onclick = updatemute;