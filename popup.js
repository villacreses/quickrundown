let paragraphs;

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {type: 'sendPars'}, function (pars) {
    console.log('Received!')
    paragraphs = pars;
  });
});

