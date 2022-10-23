let article = document.querySelectorAll("#article-usa-election-surveys-1 > div.story-content-container > div > div > p");
let text = []
Array.from(article).forEach(e => { text.push(e.innerText) } );

let link = document.createElement('a');
link.download = document.querySelector("title").innerText;
makeTextFile = function (text) {
    var blob = new Blob([text.join('\n\n')], {type: 'text/plain', endings: 'native'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
};
makeTextFile(text)