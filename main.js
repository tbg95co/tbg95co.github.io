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
                const htmlItem = `<a href="https://tbg95.github.io/${item.slug}/" target="_self" title="${item.title}" class="tile-card">
                            <figure class="image is-16by9">
                                <img
                                    loading="lazy"
                                    src="https://tbg95.github.io/${item.slug}/logo.png"
                                    alt="${item.title}"
                                />
                            </figure>
                            <div class="content">
                                <div class="name"><span>${item.title}</span></div>
                            </div>
                        </a>`;
                
                html += htmlItem;
            });
            const e = document.createElement('div');
            e.className  = "grid is-4-tablet is-4-desktop is-6-widescreen is-6-fullhd is-7-ultrawide";
            e.innerHTML = html;  
            document.getElementById('listgame').appendChild(e);
        })
    }

}
function addMenu(){
    const e = document.createElement('div');
        e.className  = "navbar-item is-mouseable";
        e.innerHTML = `<div class="navbar-link">
            <a class="button navbar-control" href="/settings.html" title="Settings">
                Settings
            </a>
        </div>`;  
        document.getElementsByClassName('navbar-start')[0].appendChild(e);
}
window.addEventListener('load', function() {
    addMenu();
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
var btn = document.getElementsByClassName("navbar-burger")[0];
btn.addEventListener("click", showMenu);