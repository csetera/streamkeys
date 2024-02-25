"use strict";
(function () {
  var BaseController = require("BaseController");

  new BaseController({
    siteName: "SiriusXM",
    play: "button[aria-label=\"Play\"]",
    pause: "button[aria-label=\"Pause\"]",
    playNext: "button[aria-label=\"Skip forward\"]",
    playPrev: "button[aria-label=\"Skip back\"]",
    mute: "button[aria-label=\"Mute\"]",

    // playState: ".play-pause-btn__img[alt='Pause']",
    song: "div[class*=\"_title\"] > div > span",
    artist: "div[class*=\"_artist\"] > div > span",
    art: "div[class*=\"_imageContainer\"] svg"
  });
})();
