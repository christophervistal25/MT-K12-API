var { translate } = require("google-translate-api-browser");
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("translate [1] - ENGLISH TO CEBUANO , [2] - CEBUANO TO ENGLISH > ");
rl.prompt();


rl.on("line", function(line) {
	if (line == 1) {
		  translate(line, { to: "ceb" })
		    .then(res => {
		      rl.setPrompt(line + " > " + res.text + "\ntranslate > ");
		      rl.prompt();
		    })
		    .catch(err => {
		      console.error(err);
		    });
	} else {
		translate(line, { to: "en" })
	    .then(res => {
	      rl.setPrompt(line + " > " + res.text + "\ntranslate > ");
	      rl.prompt();
	    })
	    .catch(err => {
	      console.error(err);
	    });
	}

}).on("close", function() {
  process.exit(0);
});