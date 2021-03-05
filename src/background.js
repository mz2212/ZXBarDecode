import { BrowserMultiFormatReader } from '@zxing/library'

// If things go wrong...
function onError(e) {
	console.error(`ZXBarDecode Error: ${e}`);
}

// The function that does the heavy lifting
function decode(u) {
	const codeReader = new BrowserMultiFormatReader();
	codeReader.decodeFromImageUrl(u).then((result) => {
		console.log(`ZXBarDecode decoded: ${result}`);
		navigator.clipboard.writeText(result).then(() => {
			console.log("Clipboard successfully set!");
		}, () => {
			console.error("Clipboard setting error!");
		})
	}).catch((err) => {
		console.error(`ZXBarDecode Error: ${err}`);
	});
	//console.log(`ZXBarDecode NYI: ${u}`);
}

// Create the menu item
browser.menus.create({
	id: "bar-decode",
	contexts: ["image"],
	title: "1D/2D Barcode Decode"
});

// Uhh... Add the listener for the menu item
browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case "bar-decode":
			decode(info.srcUrl);
			break;
	}
});