/* powerup.js */
window.TrelloPowerUp.initialize({

  "card-buttons": function (t) {
    return [{
      icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
      text: "Set Track 🎶",
      callback: function (t) {
        return t.popup({
          title: "Set Card Music",
          url: "./setTrack.html",
          height: 120
        });
      }
    }];
  },

  "card-back-section": function (t) {
    return [{
      title: "🎵 Card Music",
      icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
      content: {
        type: "iframe",
        url: t.signUrl("./music.html"),
        height: 80
      }
    }];
  }
});

