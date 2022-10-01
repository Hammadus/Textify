let article = document.querySelector("#v_article > div.article-body.v_text").getElementsByTagName("p")
let text = [] 
Array.from(article).forEach(e => { text.push(e.innerText) } );
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);
    return textFile;
  };
makeTextFile(text)