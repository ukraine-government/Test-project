// Dealing with CSS

(function() {
    const frameDiv = document.createElement('div');
    const src = 'frame/index.html';
    const iframeCss = 'opacity: 1 !important; width: 100% !important; height:100% !important;';
    const divCss = 'width:100%; height:25%; position:fixed !important; bottom:0; left:0; margin:0 !important;';

    frameDiv.innerHTML = `
    <div>
        <iframe src="${src}" frameborder=0></iframe>
    </div>
    `
    document.querySelector('.wrapper').appendChild(frameDiv);

    const iframe = document.querySelector('iframe');
    const foundDiv = document.getElementsByTagName('div');
    console.log(foundDiv);

    iframe.setAttribute('style', iframeCss);
    foundDiv[(foundDiv.length - 1)].setAttribute('style', 'margin: 0 !important');
    foundDiv[(foundDiv.length - 2)].setAttribute('style', divCss);
})();

// Dealing with IMG

(function() {
    const doc = document.querySelector('iframe').contentWindow.document;
    const portraitImg = '<img src="frame/portrait.png" alt="#" style="width: 100%; height: 100%;">';
    const landscapeImg = '<img src="frame/landscape.png" alt="#" style="width: 100%; height: 75%;">';

    if (window.innerHeight < window.innerWidth) {
        doc.write(landscapeImg);
        doc.close();
    } else {
        doc.write(portraitImg);
        doc.close();
    }
})();

// Monitoring the position
window.addEventListener("orientationchange", () => {
    const doc = document.querySelector('iframe').contentWindow.document;
    const portraitImg = '<img src="frame/portrait.png" alt="#" style="width: 100%; height: 100%;">';
    const landscapeImg = '<img src="frame/landscape.png" alt="#" style="width: 100%; height: 75%;">';

    if (window.matchMedia("(orientation: portrait)").matches) {
        doc.write(landscapeImg);
        doc.close();
    } else {
        doc.write(portraitImg);
        doc.close();
    }
});