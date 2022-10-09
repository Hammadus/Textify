let article = document.querySelectorAll("body > main > div.transporter-item.current > div > article > div > div.content-well__5e77db71 > div.main-column__b9c1cc32 > div.body-content > p")
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