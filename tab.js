function set_background() {
  chrome.storage.sync.get({ favoriteColor: 'black' }, function(items) {
    document.body.style.background = items.favoriteColor;
  });
}
set_background();