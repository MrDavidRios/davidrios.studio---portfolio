const LATEST_VERSION = '1.4.6';

const downloadButton = document.getElementById('downloadButton');

let link = 'https://github.com/MrDavidRios/remindr_releases/releases';

initDownloadButton();

function initDownloadButton() {
	const os = getOS();

	switch (os) {
		case 'Windows':
			link = `https://github.com/MrDavidRios/remindr_releases/releases/download/v${LATEST_VERSION}/Remindr-Setup-${LATEST_VERSION}.exe`;

			downloadButton.innerText = 'Download for Windows';
			break;
		case 'Linux':
			link = `https://github.com/MrDavidRios/remindr_releases/releases/download/v${LATEST_VERSION}/Remindr-${LATEST_VERSION}.dmg`;

			downloadButton.innerText = 'Download for Linux';
			break;
		case 'Mac OS':
			link = `https://github.com/MrDavidRios/remindr_releases/releases/download/v${LATEST_VERSION}/Remindr-${LATEST_VERSION}-mac.zip`;

			downloadButton.innerText = 'Download for Mac OS';
			break;
		default:
			break;
	}
}

downloadButton.addEventListener('click', () => {
	window.open(link);
});

document.getElementById('mobileReleasesButton').addEventListener('click', () => {
	window.open('https://github.com/MrDavidRios/remindr_releases/releases', '_blank');
});

function getOS() {
	var userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}
