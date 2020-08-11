console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("button press success");
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}