//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"Resources Saver",
	"icons/icon32.png",
	"content.html",
	function(panel) { 
		console.log("Content is loaded to panel"); 
	}
);
