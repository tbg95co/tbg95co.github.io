"use strict";

(function($){
	$(window).on("load",function(){
		addMenuT();
		$(".content").mCustomScrollbar();
	});
})(jQuery);

$(document).ready(function(){
	$(".burger").click(function(){
		$(".side-menu").toggleClass("show");
	});

	$(".side-header .bt-more").click(function(){
		$(".header").toggleClass("show");
	});

	if(window.innerWidth < 1025){
        $('.has-dropdown').click(function(d){
            d.preventDefault();
            $(this).children(".drop-ct").toggle();
        });
    }
    $('#talpa-splash-button').click(function(){
    	var id = $('#game_id').val();
    	$('#loadgame').html(`<iframe class="game-iframe iframeloader" id="game-area" src="https://kr.freezenova.co/demo.html#${id}" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen="" tabindex="0"></iframe>`);
    })
	/*let game_iframe = $('iframe#game-area');
	if(game_iframe.length){
		//is game page
		game_iframe.attr('src', game_iframe.attr('data-src'));
	}*/

	var $el = $(".user-pic a");
	var $ee = $(".user-dropdown");
	$el.click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$(".user-dropdown").toggleClass('show');
	});
	$(document).on('click',function(e){
		if(($(e.target) != $el) && ($ee.hasClass('show'))){
			$ee.removeClass('show');
		}
	});
	var last_offset = 12;
	var load_amount = 12;
	$('#load-more1').click((e)=>{
		e.preventDefault();
		$(this).addClass('disabled');
		// fetch_games(load_amount, 'new');
	});

	function append_content(data){
		last_offset += data.length;
		data.forEach((game)=>{
			let rating = 0;
			game['upvote'] = Number(game['upvote']);
			game['downvote'] = Number(game['downvote']);
			let total_revs = game['upvote']+game['downvote'];
			if(total_revs > 0){
				rating = (Math.round((game['upvote']/(game['upvote']+game['downvote'])) * 5) / 10);
			}
			let html = '<div class="column is-2-widescreen is-3-desktop is-4-tablet is-6-mobile">';
			html += '<div class="g-card">';
			html += '<div class="pic">';
			html += '<a href="/game/'+game['slug']+'/">';
			html += '<figure class="ratio ratio-1">';
			html += '<img src="'+game['thumb_2']+'" class="small-thumb" alt="'+game['title']+'">';
			html += '</figure></a></div>';
			html += '<div class="g-info">';
			html += '<h3 class="grid-title ellipsis">'+game['title']+'</h3>';
			html += '<div class="info"><div class="rating ellipsis">';
			html += '<span class="ico ico-star"></span> '+rating+' ('+total_revs+' Reviews)';
			html += '</div></div>';
			html += '<a href="/game/'+game['slug']+'/" class="bt-play"><img src="/content/themes/arcade-one/images/icon/play.svg" alt=""></a>';
			html += '</div></div></div>';
			$("#listing1").append(html);
			$("#listing1 .column:hidden").slice(0, load_amount).slideDown();
		});
		if(data.length < load_amount){
			$("#load-more1").text("No More Games").addClass("noContent disabled");
		} else {
			$("#load-more1").removeClass('disabled');
		}
	}
	$("#navb").on('show.bs.collapse', function(){
		$('.user-avatar').hide();
	});
	$("#navb").on('hidden.bs.collapse', function(){
		$('.user-avatar').show();
	});
	
	$('.user-avatar').on('click', ()=>{
		let element = $('.user-links');
		if (element.is(":hidden")) {
			element.removeClass('hidden');
		} else element.addClass('hidden');
	});
	$('#btn_prev').on('click', function() {
		$('.profile-gamelist ul').animate({
			scrollLeft: '-=150'
		}, 300, 'swing');
	});
	
	$('#btn_next').on('click', function() {
		$('.profile-gamelist ul').animate({
			scrollLeft: '+=150'
		}, 300, 'swing');
	});
	
});
function addMenuT(){
	var html = `<li class="nav-item ">
	<a class="nav-link" href="/collection/apps.html">Apps</a>
	</li><li class="nav-item ">
	<a class="nav-link" href="/collection/unblocked-games-77.html">Unblocked Games 77</a>
  </li>`;
	document.querySelector(".main-menu ").innerHTML = html;
  }
function open_fullscreen() {
	let game = document.getElementById("game-area");
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
