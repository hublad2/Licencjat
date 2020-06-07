function appendScripts() {
  let my_awesome_script = document.createElement("script");
  let my_awesome_script2 = document.createElement("script");
  let my_awesome_script3 = document.createElement("script");

  my_awesome_script.setAttribute("src", "video.js");
  my_awesome_script.id = "script1";
  my_awesome_script2.setAttribute(
    "src",
    "https://s.ytimg.com/yts/jsbin/www-widgetapi-vflLp9fFF/www-widgetapi.js"
  );
  my_awesome_script2.id = "www-widgetapi-script";
  my_awesome_script2.type = "text/javascript";
  my_awesome_script2.async = "";
  my_awesome_script3.setAttribute("src", "https://www.youtube.com/player_api");
  my_awesome_script3.id = "script3";

  //document.body.appendChild(my_awesome_script2);
  //document.body.appendChild(my_awesome_script3);
  //document.body.appendChild(my_awesome_script);
}

function removeScripts() {
  let my_awesome_script = document.querySelector("#script1");
  let my_awesome_script3 = document.querySelector("#script3");
  let my_awesome_script2 = document.querySelector("#www-widgetapi-script");

  //my_awesome_script.remove();
  //my_awesome_script3.remove();
  //my_awesome_script2.remove();
}

export { appendScripts, removeScripts };
