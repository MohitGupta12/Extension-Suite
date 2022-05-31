let name_el = chrome.storage.local.get('ser1');


  var newURL = "https://en.wikipedia.org/wiki/" + name_el;
   chrome.tabs.create({
       url: newURL
    });
