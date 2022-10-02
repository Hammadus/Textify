let article = document.querySelectorAll("#story > section > div > div > p");
let text = []
Array.from(article).forEach(e => { text.push(e.innerText) } );

let link = document.createElement('a');
link.download = 'article.txt';
makeTextFile = function (text) {
    var blob = new Blob([text], {type: 'text/plain'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
};
makeTextFile(text)