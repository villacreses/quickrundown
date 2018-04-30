function startRundown () {
  chrome.tabs.executeScript({
    file: 'bundle.js'
  })
}

let scanButton = document.getElementById('scan-button');

window.onload = () => startRundown();
scanButton.onclick = () => startRundown();
/*
let paragraphs;

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: 'sendPars'}, function (pars) {
    console.log('Received!')
    paragraphs = pars;
  });
});
*/
