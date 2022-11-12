let article = document.querySelectorAll("#v_article > div.article-body.v_text > p")
let text = [] 
Array.from(article).forEach(e => { text.push(e.innerText) } );

let link = document.createElement('a');
link.download = document.querySelector(".title").innerText;
makeTextFile = function (text) {
    const blob = new Blob([text.join('\n\n')], {type: 'text/plain', endings: 'native'});
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
};
makeTextFile(text)
