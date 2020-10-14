function appendScripts() {
  let script1 = document.createElement("script");
  let script2 = document.createElement("script");
  let script3 = document.createElement("script");

  script1.setAttribute("src", "video.js");
  script1.id = "script1";
  script2.setAttribute(
    "src",
    "https://s.ytimg.com/yts/jsbin/www-widgetapi-vflLp9fFF/www-widgetapi.js"
  );
  script2.id = "www-widgetapi-script";
  script2.type = "text/javascript";
  script2.async = "";
  script3.setAttribute("src", "https://www.youtube.com/player_api");
  script3.id = "script3";
}

function removeScripts() {
  let script1 = document.querySelector("#script1");
  let script3 = document.querySelector("#script3");
  let script2 = document.querySelector("#www-widgetapi-script");
}

export { appendScripts, removeScripts };
