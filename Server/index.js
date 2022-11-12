const cheerio = require('cheerio');
let url = 'https://www.newsweek.com/democrats-propose-pulling-troops-saudi-arabia-revenge-opec-move-1749412';
let $;

function init() {
	// 1) gets the html and loads it into a cheerio object
	// 2) calls the respecitve function to get html for that site
	getHTML();
	let ulrOBJ = new URL(url);	
	let host = selectHost(ulrOBJ.hostname);
	host.call();
};

function newsweek () {
	// 1) filters selectors for this specific newsite
	let article = $("#v_article > div.article-body.v_text > p");
	console.log(article.text());
};

const selectHost = function (domain) {
	// 1) gets the domain name to know which funtion&selectors to apply
	switch(domain) {
		case 'www.newsweek.com':
			return newsweek;
		default:
			console.log(domain);
			break;
	}
};

const getHTML = async (url) =>{
	// 1) uses experimental fetch to get the text response from url
	try {
		const response = await fetch(url);
		if(response.status === 200) {
			const body = await response.text();
			$ = cheerio.load(body);
		} else {
			throw 'Error fetching site';
		}
	} catch (error) {
		console.log(error);
	}
};

init();
