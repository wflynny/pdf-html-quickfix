/*global chrome*/

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function updateUrl(tab) {
  var suffix = '+html';
  if (endsWith(tab.url, suffix)) {
    var newUrl = tab.url.replace(suffix, '');
    chrome.tabs.update(tab.id, {url: newUrl});
  }
}

chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {updateUrl(tab);});
