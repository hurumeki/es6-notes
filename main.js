function appendScriptCode(s) {
  fetch(s.dataset.url)
    .then(request => request.text())
    .then(text => {
      let code = `
\`\`\` js
${text}
\`\`\`
`;
      s.parentElement.insertBefore(document.createTextNode(code), s.nextSibling);
      s.parentElement.removeChild(s);
    });
}


function appendScriptResult(elem) {
  let text = elem.innerText,
    ifr = document.createElement('iframe'),
    result,
    p;
  document.body.appendChild(ifr);
  try {
    result = ifr.contentWindow.eval(text);
  } catch(e) {
    result = e;
  }

  result = `
> ${result}
`;
  p = document.createElement('p');
  p.appendChild(document.createTextNode(result));
  elem.parentElement.parentElement.insertBefore(p, elem.parentElement.nextSibling);
  document.body.removeChild(ifr);
}

document.addEventListener('readystatechange', () => {
  let scripts = document.querySelectorAll("[data-url]");
  Promise.all(Array.from(scripts).map(appendScriptCode))
    .then(() => {
        let markDeep = document.createElement('script');
        markDeep.setAttribute('src','vendor/markdeep.min.js');
        document.body.appendChild(markDeep);

        setTimeout(() => {
          let codes = document.querySelectorAll("code");
          Array.from(codes).map(appendScriptResult)
        }, 1000)
    });
});
