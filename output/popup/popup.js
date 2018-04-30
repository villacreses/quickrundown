let paragraphs;
let scanButton = document.getElementById('scan-button');

const bulletPoint = text => {
  let bullet = document.createElement('li');
  bullet.className = 'bullet';
  bullet.textContent = text;
  return bullet;
}

const createBulletedList = textArr => {
  let container = document.getElementById('rundown-container');
  textArr
    .map(text => bulletPoint(text))
    .forEach(bullet => {
      container.appendChild(bullet);
    })
}

const startScraping = () => chrome.tabs.executeScript({
  file: 'bundle.js'
});

const loadRundown = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: 'sendPars'}, function (pars) {
      console.log('Received response!')

      let description = document.getElementById('description')
      description.textContent = (pars.length === 1) ? 'Could not read article on this website :(': pars[0];
      paragraphs = pars.slice(1);
      createBulletedList(paragraphs);
    });
  });
}

window.onload = () => startScraping();
scanButton.onclick = () => loadRundown();
