import sum from 'sum';

console.log('Fetching info from ', window.location.href);

var pars = document.querySelectorAll('article p');
if (!pars.length) document.querySelectorAll('p');

pars = [...pars].map(p => p.textContent);

let originalLength = pars.join(' ').length;

pars = pars
  .filter(p => p.split(' ').length > 7)
  .map(p => sum({'corpus': p}).summary)

let newLength = pars.join(' ').length;

let lengthText = `This rundown is ${Math.floor(newLength / originalLength * 100)}% shorter than the original article.`;
pars.unshift(lengthText);

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log('Got message!');
    switch(message.type) {
      case "sendPars":
        sendResponse(pars);
        break;
      default:
        console.error("Unrecognised message: ", message);
    }
  }
);
