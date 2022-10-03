let article = document.querySelector("#v_article > div.article-body.v_text").getElementsByTagName("p")
let text = [] 
Array.from(article).forEach(e => { text.push(e.innerText) } );

let link = document.createElement('a');
link.download = document.querySelector("#block-system-main > div > article > header > h1").innerText;
makeTextFile = function (text) {
    var blob = new Blob([text], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
};
makeTextFile(text)