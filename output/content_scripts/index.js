import sum from 'sum';

console.log(window.location.href)

var pars = document.querySelectorAll('p');
pars = [...pars]
  .map(p => p.textContent)
  .filter(p => p !== '')
  .map(p => sum({'corpus': p}).summary)

console.log(pars)
