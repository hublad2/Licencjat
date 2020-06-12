function onYouTubePlayerAPIReady(
  videoId,
  startSeconds,
  endSeconds,
  videoContainerId
) {
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
  player = new YT.Player(videoContainerId, playerConfig);

  function onStateChange(state) {
    if (state.data === YT.PlayerState.ENDED) {
      player.loadVideoById({
        videoId: videoId,
        startSeconds: startSeconds,
        endSeconds: endSeconds,
      });
    }
  }
}

export { onYouTubePlayerAPIReady };
