function playGame(){
    var tmp = document.querySelector('#game-arena').dataset.url;
    document.querySelector('#game-arena').innerHTML = `<iframe id="game-element" allowfullscreen="" allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write" name="gameFrame" scrolling="no" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads" src="${tmp}"></iframe>`;
}
function open_fullscreen() {
	let game = document.getElementById("game-element");
	if (game.requestFullscreen) {
	  game.requestFullscreen();
	} else if (game.mozRequestFullScreen) { /* Firefox */
	  game.mozRequestFullScreen();
	} else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	  game.webkitRequestFullscreen();
	} else if (game.msRequestFullscreen) { /* IE/Edge */
	  game.msRequestFullscreen();
	}
};
function loadGA(){
    var  r = document.createElement("script");
	r.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-5YW5LYPX1G"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5YW5LYPX1G');
        var ads = document.createElement('script');
        ads.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"), ads.setAttribute("type", "text/javascript"), ads.setAttribute("crossOrigin", "anonymous"), ads.onload = function(){
            (adsbygoogle = window.adsbygoogle || []).push({});
            (adsbygoogle = window.adsbygoogle || []).push({});
        },document.head.appendChild(ads);
    },document.head.appendChild(r);
}

window.addEventListener('load', function() {

    // loadGA();
});