function showList(file){
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
