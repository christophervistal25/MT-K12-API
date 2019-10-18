let express    = require('express');
let bodyParser = require('body-parser');
let app        = express();
let { translate } = require("google-translate-api-browser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/translate', function (req, res) {
	translate(req.body.word, { to: req.body.language }).then(result => {
		res.send({'translated' : result.text})
	});
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
