let article = document.querySelectorAll("body > div.layout__content-wrapper.layout-with-rail__content-wrapper > section.layout__wrapper.layout-with-rail__wrapper > section.layout__main-wrapper.layout-with-rail__main-wrapper > section.layout__main.layout-with-rail__main > article > section > main > div.article__content-container > div.article__content > p")
let text = [] 
Array.from(article).forEach(e => { text.push(e.innerText) } );

let link = document.createElement('a');
link.download = document.querySelector("#maincontent").innerText;
makeTextFile = function (text) {
    var blob = new Blob([text], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
};
makeTextFile(text)