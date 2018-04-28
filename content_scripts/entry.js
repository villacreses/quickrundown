console.log(window.location.href)

document.addEventListener('DOMContentLoaded', () => {
  var pars = document.querySelectorAll('p');
  pars = [...pars].map(p => p.textContent);

  chrome.runtime.onMessage.addListener(
    function(message, sender, sendRes) {
      sendRes(pars);
    }
  )
});
