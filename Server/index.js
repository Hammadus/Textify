const cheerio = require('cheerio');
let URL = 'https://www.newsweek.com/democrats-propose-pulling-troops-saudi-arabia-revenge-opec-move-1749412';
let $ = null;

function init() {
	let html = getHTML(URL);
	$ = cheerio.load(html);
	let domain = (new  URL(URL));	
	let host = getHost(domain.hostname);
	host(html);
};

function newsweek () {
	let text = [];
	let article = $("#v_article > div.article-body.v_text > p")
	console.log(article.text());
};

const getHost = function (domain) {
	switch(domain) {
		case 'www.newsweek.com':
			return newsweek;
		default:
			console.log(domain);
			break;
	}
};

const getHTML = async () =>{
	const response = await fetch(URL);
	const body = await response.text();
	console.log(body);
	return body;
};

init();
