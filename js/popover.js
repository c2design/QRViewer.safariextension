safari.application.addEventListener("popover", popoverHandler, true);

function popoverHandler() {
	var uri = safari.application.activeBrowserWindow.activeTab.url;
	var QRContainer = document.querySelector("#QRCodeContainer");

	QRContainer.innerHTML = '';

	var qrcode = new QRCode(QRContainer, {
		width : 220,
		height : 220,
		correctLevel : QRCode.CorrectLevel.L
	});
	qrcode.makeCode(uri);
}