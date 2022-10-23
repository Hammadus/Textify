# Textify

Extracts the article text content only. 

> For installation free download copy code from the client folder into your browser console (see usage). Thats all, you've got the text-only news article!

## Installation
The Server uses experimental node fetch, installing lates node is suggested. As of writing v18.10.0 was used.  Run ```node --experimental-fetch index.js``` in terminal. The server allows you to access the sites text without pasting into browser granted you have the link to the article. 

## Usage

├── Client
│   ├── bloomBerg.js
│   ├── cnn.js
│   ├── newsweek.js
│   ├── nytimes.js
│   └── reuters.js
├── Server
    ├── index.js
    ├── package.json
    └── package-lock.json

- This does not offer a way passed paywalls. Consider supporting sites too. 

- Inspect element on the news article.

- Open the console tab and paste the javascript for that website, hit enter.

- File will get downloaded as "{The Title}".txt to downloads directory.

- Save on inc, and remove unnecessary page elements when printing/saving

## Contributing
Pull requests are welcome. Make it better or add more news sites. 

Please make sure to test.

Interesting read on [Blobs](https://javascript.info/blob) in JS 

## License
[MIT](https://choosealicense.com/licenses/mit/)
