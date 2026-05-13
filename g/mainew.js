function showList(file){
    if(document.getElementById('listgame')){
        fetch("data/"+file,{
            headers: {
                'Content-Type': 'application/json',
              },
        }).then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach((item) =>{
                const htmlItem = `
                <div class="g-card">
                    <div class="pic">
                    <figure class="ratio ratio-75">
                        <a href="/g/${item.slug}.html" rel="noindex nofollow">
                        <img src="https://tbg95.co/${item.slug}/logo.png" class="game-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">${item.title}</h3>
        
                    <div class="bt-cta">
                        <a class="cta" rel="noindex nofollow" href="/g/${item.slug}.html">Play Now</a>
                    </div>
                    </div>
                </div>
                `;
            
                const e = document.createElement('div');
                e.className  = "column is-3-desktop is-6-mobile show";
                e.innerHTML = htmlItem;  
                document.getElementById('listgame').appendChild(e);
            });
            
        })
    }

}
function showHot(file){
    if(document.getElementById('listhot')){
        fetch("/data/"+file,{
            headers: {
                'Content-Type': 'application/json',
              },
        }).then(response => response.json())
        .then(data => {
            let html = "";
            data.forEach((item) =>{
                const htmlItem = `<div class="g-card">
                    <div class="pic">
                    <figure class="ratio ratio-1">
                        <a href="/g/${item.slug}.html" rel="noindex nofollow">
                        <img src="https://tbg95.co/${item.slug}/logo.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a href="/g/${item.slug}.html" rel="noindex nofollow">${item.title}</a>
                    </h3>
        
                    <a href="/g/${item.slug}.html" class="bt-play" rel="noindex nofollow">
                        <img src="/images/play.svg" alt="Play game">
                    </a>
                    </div>
                </div>`;
               
                const e = document.createElement('div');
                e.className  = "column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile show";
                e.innerHTML = htmlItem;  
                document.getElementById('listhot').appendChild(e);
            });
            
        })
    }

}
var listGame;
fetch("data/all.json",{
headers: {
    'Content-Type': 'application/json',
    },
}).then(response => response.json())
.then(data => {
    listGame = data;
});

function liveSearch(){
    var x = document.getElementById("searchInput").value;
    console.log(x);
    let html = "";
    document.getElementById('listhot').innerHTML = '';
    for (var j=0; j<listGame.length; j++) {
        if (listGame[j].title.toUpperCase().indexOf(x.toUpperCase()) >= 0) {
            var item = listGame[j];
            const htmlItem = `<div class="g-card">
                    <div class="pic">
                    <figure class="ratio ratio-1">
                        <a href="/g/${item.slug}.html" rel="noindex nofollow">
                        <img src="/${item.slug}/logo.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a href="/g/${item.slug}.html" rel="noindex nofollow">${item.title}</a>
                    </h3>
        
                    <a href="/g/${item.slug}.html" class="bt-play" rel="noindex nofollow">
                        <img src="/images/play.svg" alt="Play game">
                    </a>
                    </div>
                </div>`;
                const e = document.createElement('div');
                e.className  = "column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile show";
                e.innerHTML = htmlItem;  
                document.getElementById('listhot').appendChild(e);
        }
    }
    // const e = document.createElement('div');
    // e.className  = "grid is-4-tablet is-4-desktop is-6-widescreen is-6-fullhd is-7-ultrawide";
    // e.innerHTML = html;  
    // console.log(document.querySelector('.gird'));
    // document.querySelector('#listgame div').innerHTML = html;
    // return -1;
}
function addMenu(){
    const newgame = document.createElement('div');
        newgame.className  = "navbar-item is-mouseable";
        newgame.innerHTML = `<div class="navbar-link">
            <a class="button navbar-control" href="/settings.html" title="Settings">
                Settings
            </a>
        </div>`;  
    document.getElementsByClassName('navbar-start')[0].appendChild(newgame);
    const e = document.createElement('div');
        e.className  = "navbar-item is-mouseable";
        e.innerHTML = `<div class="navbar-link">
            <a class="button navbar-control" href="/news.html" title="News">
            News
            </a>
        </div>`;  
    document.getElementsByClassName('navbar-start')[0].appendChild(e);
    
}

var firebase;
 
window.addEventListener('load', function() {
    
    // loadFirebase();
    //addMenu();
    // addLoginBtn();
    checkStore();
    loadGA();
})

function showMenu(){
    
    const e = document.getElementById('navbar');
    const menumb = document.getElementsByClassName('navbar-menu')[0];
    if(!e.classList.contains("is-active")){
        console.log(1);
        e.classList.add('is-active');
        menumb.style.display = "block";
    } else {
        e.classList.remove('is-active');
        menumb.style.display = "none";
    }
}
function loadGA(){
    var  r = document.createElement("script");
	r.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-5YW5LYPX1G"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-5YW5LYPX1G');
        
        var ads = document.createElement('script');
        ads.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"), ads.setAttribute("type", "text/javascript"), ads.setAttribute("crossOrigin", "anonymous"), document.head.appendChild(ads);
    },document.head.appendChild(r);
}
//
function checkStore(){
    var title = localStorage.getItem('title');
    if(title){
        document.title = title;
    }
    var icon = localStorage.getItem('icon');
    if(icon){

        setIcoLink(icon);
    }
    
}
function setIcoLink(linkIcon){
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = linkIcon;
}
//
// var btn = document.getElementsByClassName("navbar-burger")[0];
// btn.addEventListener("click", showMenu);


