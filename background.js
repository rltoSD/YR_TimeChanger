console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        txt: "hello"
    }
    console.log(tab.id)
    chrome.tabs.sendMessage(tab.id, msg);

}

/*
chrome.browserAction.onClicked.addListener(function() {
    console.log("pressed");
    
    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL('script.js');
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);

});*/
