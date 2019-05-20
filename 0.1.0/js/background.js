chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('html/options.html')
    }, function(tab) {

    });
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  for (var i in message.downloadAllImages) {
    chrome.downloads.download({
      url: message.downloadAllImages[i]
    });
  }
});
