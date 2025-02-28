let latestVersion = "1.4.6";

const downloadButton = document.getElementById("downloadButton");

let link = "https://github.com/MrDavidRios/remindr/releases";

getLatestVersion().finally(initDownloadButton);

function initDownloadButton() {
  const os = getOS();

  console.log(os);

  switch (os) {
    case "Windows":
      link = `https://github.com/MrDavidRios/remindr/releases/download/v${latestVersion}/Remindr-Setup-${latestVersion}.exe`;

      downloadButton.innerText = `Download for Windows (v${latestVersion})`;
      break;
    case "Linux":
      link = `https://github.com/MrDavidRios/remindr/releases/download/v${latestVersion}/Remindr_${latestVersion}_amd64.deb`;

      downloadButton.innerText = `Download for Linux (Debian) (v${latestVersion})`;
      break;
    case "Mac OS":
      link = `https://github.com/MrDavidRios/remindr/releases/download/v${latestVersion}/Remindr-${latestVersion}.pkg`;

      downloadButton.innerText = "Not currently available on Mac OS";
      // downloadButton.innerText = `Download for Mac OS (v${latestVersion})`;
      break;
    default:
      break;
  }
}

downloadButton?.addEventListener("click", () => {
  if (getOS() == "Mac OS") return;

  window.open(link);
});

document.getElementById("releasesMobileButton")?.addEventListener("click", () => {
  window.open("https://github.com/MrDavidRios/remindr/releases", "_blank");
});

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

async function getLatestVersion() {
  let url = "https://api.github.com/repos/mrdavidrios/remindr/tags";
  let obj = null;

  try {
    obj = await (await fetch(url)).json();
  } catch (e) {
    console.log("error");
  }

  latestVersion = obj[0].name.substring(1) ?? latestVersion;
}
