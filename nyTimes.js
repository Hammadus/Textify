let article = document.querySelectorAll("#story > section > div > div > p");
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