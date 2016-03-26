function greeting() {
	console.log("Hello world que no llega a ejecutarse!!");
}

var t = setTimeout(greeting, 2000);
clearTimeout(t);