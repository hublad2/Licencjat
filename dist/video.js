let videoId = "p5m4TCN5upQ";
let startSeconds = 1;
let endSeconds = 21;

let player;

let playerConfig = {
  height: "360",
  width: "640",
  videoId: videoId,
  playerVars: {
    autoplay: 0,
    controls: 0,
    showinfo: 0,
    modestbranding: 1,
    fs: 1,
    cc_load_policy: 0,
    iv_load_policy: 3,
    start: startSeconds,
    end: endSeconds,
    autohide: 0,
  },
  events: {
    onStateChange: onStateChange,
  },
};

function onYouTubePlayerAPIReady() {
  player = new YT.Player("video1", playerConfig);
}

function onStateChange(state) {
  if (state.data === YT.PlayerState.ENDED) {
    player.loadVideoById({
      videoId: videoId,
      startSeconds: startSeconds,
      endSeconds: endSeconds,
    });
  }
}
