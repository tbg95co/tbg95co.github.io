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
                        <a href="https://tbg95.co/${item.slug}/">
                        <img src="https://tbg95.co/${item.slug}/logo.png" class="game-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">${item.title}</h3>
        
                    <div class="bt-cta">
                        <a class="cta" href="https://tbg95.co/${item.slug}/">Play Now</a>
                    </div>
                    </div>
                </div>
                `;
                /*const htmlItem = `<a href="https://tbg95.co/${item.slug}/" target="_self" title="${item.title}" class="tile-card">
                            <figure class="image is-16by9">
                                <img
                                    loading="lazy"
                                    src="https://tbg95.co/${item.slug}/logo.png"
                                    alt="${item.title}"
                                />
                            </figure>
                            <div class="content">
                                <div class="name"><span>${item.title}</span></div>
                            </div>
                        </a>`;
                */
                // html += htmlItem;
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
        fetch("data/"+file,{
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
                        <a href="https://tbg95.co/${item.slug}/">
                        <img src="https://tbg95.co/${item.slug}/logo.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a href="https://tbg95.co/${item.slug}/">${item.title}</a>
                    </h3>
        
                    <a href="https://tbg95.co/${item.slug}/" class="bt-play">
                        <img src="/images/play.svg" alt="Play game">
                    </a>
                    </div>
                </div>`;
                /*const htmlItem = `<a href="https://tbg95.co/${item.slug}/" target="_self" title="${item.title}" class="tile-card">
                            <figure class="image is-16by9">
                                <img
                                    loading="lazy"
                                    src="https://tbg95.co/${item.slug}/logo.png"
                                    alt="${item.title}"
                                />
                            </figure>
                            <div class="content">
                                <div class="name"><span>${item.title}</span></div>
                            </div>
                        </a>`;
                */
                // html += htmlItem;
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
                        <a href="https://tbg95.co/${item.slug}/">
                        <img src="https://tbg95.co/${item.slug}/logo.png" class="small-thumb" alt="${item.title}">
                        </a>
                    </figure>
                    </div>
                    <div class="g-info">
                    <h3 class="grid-title ellipsis">
                        <a href="https://tbg95.co/${item.slug}/">${item.title}</a>
                    </h3>
        
                    <a href="https://tbg95.co/${item.slug}/" class="bt-play">
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
function loadFirebase(){
    var  r = document.createElement("script");
	r.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
        var  database = document.createElement("script");
        database.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"), database.setAttribute("type", "text/javascript"), database.setAttribute("crossOrigin", "anonymous"),  database.onload = function (){
            var  authsc = document.createElement("script");
            authsc.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"), authsc.setAttribute("type", "text/javascript"), authsc.setAttribute("crossOrigin", "anonymous"),  authsc.onload = function (){    
                var firestoresc =  document.createElement("script");
                firestoresc.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"), firestoresc.setAttribute("type", "text/javascript"), firestoresc.setAttribute("crossOrigin", "anonymous"),  firestoresc.onload = function (){    
                    var  loginsc = document.createElement("script");
                    loginsc.setAttribute("src", "/mainsite/login.js"), loginsc.setAttribute("type", "text/javascript"), document.head.appendChild(loginsc);
                },document.head.appendChild(firestoresc);
                
            }, document.head.appendChild(authsc);
        },document.head.appendChild(database);
    },document.head.appendChild(r);
}
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
        // var ads = document.createElement('script');
        // ads.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"), ads.setAttribute("type", "text/javascript"), ads.setAttribute("crossOrigin", "anonymous"), document.head.appendChild(ads);
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


