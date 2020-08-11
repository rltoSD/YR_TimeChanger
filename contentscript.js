chrome.runtime.onMessage.addListener(gotMessage);
window.addEventListener("load", function() {
    console.log("pressed");
    
    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL('script.js');
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);

});
var msg = "";

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    msg = message.txt;
}

console.log(msg);

if(msg === "hello"){
    window.addEventListener(gotMessage, function() {
        console.log("pressed");
        
        var s = document.createElement('script');
        // TODO: add "script.js" to web_accessible_resources in manifest.json
        s.src = chrome.extension.getURL('script.js');
        s.onload = function () {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(s);
    
    });
}
